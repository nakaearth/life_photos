class RemoveColumnGeoMaps < ActiveRecord::Migration
  def change
    remove_column :geo_maps, :photo_id
  end
end
