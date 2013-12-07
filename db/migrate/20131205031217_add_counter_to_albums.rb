class AddCounterToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :album_photos_count, :integer, null: false, default: 0
  end
end
