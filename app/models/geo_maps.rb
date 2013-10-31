# == Schema Information
#
# Table name: geo_maps
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  latitude   :decimal(, )      not null
#  longitude  :decimal(, )      not null
#  photo_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class GeoMaps < ActiveRecord::Base
  belongs_to :photo
end
