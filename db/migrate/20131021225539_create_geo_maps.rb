class CreateGeoMaps < ActiveRecord::Migration
  def change
    create_table :geo_maps do |t|
      t.string :name , null: false
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
  end
end
