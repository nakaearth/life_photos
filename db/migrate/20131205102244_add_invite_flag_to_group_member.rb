class AddInviteFlagToGroupMember < ActiveRecord::Migration
  def change
    add_column :group_members, :invite_flag, :boolean , null: false, default: false
  end
end
