class Groups::GroupMemberController < ApplicationController
  def invite_member
    @group = Group.find(params[:group_id])
    @group_member = GroupMember.new
    @albums = current_user.albums
  end

  def invite
    # [todo]  トランザクション入れるよ
    ActiveRecord::Base.transaction do
      @group_member = GroupMember.new(group_id: params[:group_id], e_mail: params[:group_member][:e_mail])
      if @group_member.save 
        @album_group = AlbumGroup.new(album_id: params[:album_id], group_id: params[:group_id])
        @album_group.save
        @album_url = "/albums/#{params[:album_id]}"
        InviteGroupMailer.send_invite_mail(params[:group_member][:e_mail], params[:album_id]).deliver
        @group = Group.find(params[:group_id])
      end
    end
  rescue  => e
    logger.error "invite error mail" 
    logger.error e
    redirect_to '/500.html'
  end
end
