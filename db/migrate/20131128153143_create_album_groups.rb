class CreateAlbumGroups < ActiveRecord::Migration
  def change
    create_table :album_groups do |t|
      t.integer :album_id
      t.integer :group_id

      t.timestamps
    end
  end
end
