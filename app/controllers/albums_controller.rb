class AlbumsController < ApplicationController

  def index
    @albums = current_user.albums.page(params[:page]).per(10)
  end
  
  def my_list
    @albums = current_user.albums.page(params[:page]).per(10)
    respond_to do |format|
      @albums.to_json
      format.json
    end
  end

  def calendar
    @albums = current_user.albums.page(params[:page]).per(10)
  end

  def show
    @album  = Album.where(id: params[:id]).where(user_id: current_user.id).first
    @photos = Photo.where(album_id: @album.id).where(user_id: current_user.id).page(params[:page]).per(20)
  end

  def new
    @album = Album.new
    @from_url = params[:from_url].presence || 'menu'
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      redirect_to action: :new, controller: :photos if params[:from_url] == 'photo'
      redirect_to @album , notice: 'album create success' unless params[:from_url] == 'photo'
    else
      render action: :new
    end
  end

  def update
    @album = Album.new(album_params)
    if @album.save
      redirect_to @album , notice: 'album update success.'
    else
      render action: :edit
    end
  end

  def edit
    @album = Album.find(params[:id])
  end

  def destroy
  end

  private
  def album_params
    params.require(:album).permit(:title, :description)
  end

end
