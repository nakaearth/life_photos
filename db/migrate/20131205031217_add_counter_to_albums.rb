class AddCounterToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :album_photos_count, :intefer, null: false, default: 0
  end
end
