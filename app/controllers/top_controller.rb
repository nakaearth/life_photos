class TopController < ApplicationController
  def index
    @albums = Album.all  
  end
end
