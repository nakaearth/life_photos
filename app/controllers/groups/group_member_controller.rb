class Groups::GroupMemberController < ApplicationController
  def invite_member
    @group = Group.find(params[:group_id])
    @group_member = GroupMember.new
    @albums = current_user.albums
  end

  def invite
    # [todo]  album_groupにデータ登録
    @album_group = album_group.new(album_id: params[:album_id], group_id: params[:group_id])
    @album_group.save
    InviteGroupMailer.send_invite_mail(params[:group_member][:e_mail]).deliver
  rescue  => e
    logger.error 2
    redirect_to '/500.html'
  end
end
