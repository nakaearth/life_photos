class AlbumsController < ApplicationController
  def index
    @albums = current_user.albums.page(params[:page]).per(10)
  end

  def show
    @album = Album.find(params[:id])
  end

  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_params)
    @album.user_id = current_user.id
    if @album.save
      redirect_to @album , notice: 'album create success'
    else
      render action: :new
    end
  end

  def update
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
