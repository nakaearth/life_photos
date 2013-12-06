class AddTokenToGroupMembers < ActiveRecord::Migration
  def change
    add_column :group_members, :token, :string, length: 140 
  end
end
