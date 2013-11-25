class Groups::GroupMemberController < ApplicationController
  def invite_member
    @group = Group.find(params[:group_id])
    @group_member = GroupMember.new

  end

  def invite
    # [todo] 招待メールを送付する
    
  end
end
