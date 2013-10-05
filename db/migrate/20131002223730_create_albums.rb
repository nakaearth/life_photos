class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.text :description
      t.integer :user_id

      t.timestamps
    end
    add_column :photos, :album_id, :integer
    add_index :photos, [:album_id]
  end
end
