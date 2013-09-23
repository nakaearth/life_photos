class PhotosController < ApplicationController
  def index
    @photos = current_user.photos.page(params[:page]).per(10)
  end

  def show
    @photo = Photo.find(params(:id))
  end

  def new
    @photo = Photo.new
  end

  def create
  end

  def update
    @photo = Photo.find(params(:id))
  end

  def edit
  end

  def destroy
    @photo = Photo.find(params(:id))
  end
end
