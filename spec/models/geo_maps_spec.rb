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
        @geomap.photo_id = 1
        expect(@geomap.save).to be_true
      end

    end
  end
end
