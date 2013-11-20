class MapsController < ApplicationController
  include ActionController::Live
  
  def index
    @albums = current_user.albums.page(params[:page]).per(10)
  end

  def new
    @map = GeoMaps.new
  end

  def create
    @map = GeoMaps.new(geo_map_params) 
    #latitude = params[:latitude]
    #longitude = params[:longtitude]
    #@map.latitude = params[:latitude]
    #@map.longitude = params[:longtitude]
    if @map.save
      redirect_to action: 'index'
    else
      render action: :new
    end
  end

  def markers
    response.header['Content-Type'] = 'text/event-stream'
 
    latitude = Range.new(*[params[:north], params[:south]].sort)
    longitude = Range.new(*[params[:east], params[:west]].sort)
    exclude_ids = params[:excludes].to_s.split(',')
 
    GeoMaps.where(latitude: latitude, longitude: longitude).where.not(id: exclude_ids).each do |marker|
      logger.debug(marker.inspect)
      response.stream.write("event: marker\n")
      response.stream.write("data: #{marker.attributes.to_json}\n\n")
      sleep 0.1
    end
 
    response.stream.write("event: done\n")
    response.stream.write("data: bye\n\n")
  rescue IOError
    # クライアント側から close された場合の例外は無視する.
  ensure
    response.stream.close
  end 

  # Never trust parameters from the scary internet, only allow the white list through.
  def geo_map_params
    params.require(:geo_maps).permit(:name ,:latitude, :longitude)
  end

end
