class Lifephoto::TopController < ApplicationController
  skip_before_filter :login? ,only: :index

  def index
    @albums = Album.all  
  end
end
