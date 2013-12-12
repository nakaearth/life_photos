# == Schema Information
#
# Table name: geo_maps
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  latitude   :decimal(, )      not null
#  longitude  :decimal(, )      not null
#  created_at :datetime
#  updated_at :datetime
#

require 'spec_helper'

describe GeoMaps do
  describe "save test" do
    fixtures :photos

    context "success case" do
      before do
      end

      it "save success?" do
        @geomap = GeoMaps.new
        @geomap.name = 'tokyo'
        @geomap.latitude = 35
        @geomap.longitude = 139
        expect(@geomap.save).to be_true
      end

    end
  end
end
