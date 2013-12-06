class AddIndexToGroupMembers < ActiveRecord::Migration
  def change
    add_index :group_members, [:token], :unique => true
  end
end
