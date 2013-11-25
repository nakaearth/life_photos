class GroupMember < ActiveRecord::Migration
  def change
    create_table :group_members do |t| 
      t.string :e_mail, null: false
      t.integer :group_id
    end
  end
end
