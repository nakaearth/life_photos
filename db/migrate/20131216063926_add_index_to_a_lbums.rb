class AddIndexToALbums < ActiveRecord::Migration
  def change
    add_index :albums, [:user_id]
  end
end
