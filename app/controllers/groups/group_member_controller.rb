class Groups::GroupMemberController < ApplicationController
  def invite_member
    @group = Group.find(params[:group_id])
    @group_member = GroupMember.new
    @albums = current_user.albums
  end

  def invite
    # [todo]  トランザクション入れるよ
    @album_group = AlbumGroup.new(album_id: params[:album_id], group_id: params[:group_id])
    @album_group.save
    @group_member = GroupMember.new(group_id: params[:group_id], e_mail: params[:group_member][:e_mail])
    @group_member.save 
    @invite_url = "/albums/#{params[:album_id]}"
    InviteGroupMailer.send_invite_mail(params[:group_member][:e_mail]).deliver
  rescue  => e
    logger.error "invite error mail" 
    logger.error e
    redirect_to '/500.html'
  end
end
