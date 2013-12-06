class Groups::GroupMemberController < ApplicationController
  def invite_member
    @group = Group.find(params[:group_id])
    @group_member = GroupMember.new
    @albums = current_user.albums
  end

  def invite
    ActiveRecord::Base.transaction do
      # [todo] Token発行処理をいれる 
      token = generate_token
      @group_member = GroupMember.new(group_id: params[:group_id], e_mail: params[:group_member][:e_mail], token: token)
      if @group_member.save 
        @album_group = AlbumGroup.new(album_id: params[:album_id], group_id: params[:group_id])
        @album_group.save
        InviteGroupMailer.send_invite_mail(@group_member, params[:album_id]).deliver
        @group = Group.find(params[:group_id])
      end
    end
  rescue  => e
    logger.error "invite error mail" 
    logger.error e
    redirect_to '/500.html'
  end

  def join_this_group
    if @group_member = Group_member.find(group_id: params[:group_id], e_mail: params[:e_mail], token: params[:token])
      @group_member.invite_flag = true
      @group_member.save
      redirect_to action: "guest_user_show", controller: "albums", id: params[:album_id]
    else
      redirect_to '/500.html'
    end
  end

  private
  def generate_token
    salt = [rand(64),rand(64)].pack("C*").tr("\x00-\x3f","A-Za-z0-9./")
    ((0..9).to_a + ('a'..'z').to_a + ('A'..'Z').to_a).shuffle[0..25].join.crypt(salt) 
  end
end
