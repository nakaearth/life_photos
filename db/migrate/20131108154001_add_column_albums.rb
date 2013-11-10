class AddColumnAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :top_img_path, :string, null: false , default: "no_image.jpg"
  end
end
