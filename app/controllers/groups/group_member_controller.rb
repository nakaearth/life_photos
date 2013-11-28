class Groups::GroupMemberController < ApplicationController
  def invite_member
    @group = Group.find(params[:group_id])
    @group_member = GroupMember.new
  end

  def invite
    # [todo] 招待メールを送付する
    InviteGroupMailer.send_invite_mail(params[:group_member][:e_mail]).deliver
    redirect_to action: 'show', controller: 'groups', id: params[:group_id]
  rescue  => e
    redirect_to '/500.html'
  end
end
