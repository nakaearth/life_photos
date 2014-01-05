class AddColumnAlbum < ActiveRecord::Migration
  def change
    add_column :albums , :group_id, :integer
    add_index  :albums, [:group_id]
  end
end
