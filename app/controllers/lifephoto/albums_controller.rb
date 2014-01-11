class Lifephoto::AlbumsController < ApplicationController
  include Jpmobile::ViewSelector

  layout "guest_user", :only => [:guest_user_show]

  respond_to :json, :only => ["my_list"]

  #  before_action :album_group_member?, only: [:show]

  def index
    @albums = current_user.albums.page(params[:page]).per(10)
  end

  def my_list
    @albums = User.find(params[:user_id]).albums.page(params[:page]).per(10)
    @albums.to_json
  end

  def calendar
    @albums = current_user.albums.page(params[:page]).per(10)
  end

  def show
    album_group_member? params[:id]
    @album  = Album.find_by(id: params[:id])
    @photos = Photo.where(album_id: @album.id).where(user_id: current_user.id).page(params[:page]).per(20)
  end

  def guest_user_show
    album_group_member? params[:id]
    @album  = Album.find_by(id: params[:id])
    @photos = Photo.where(album_id: @album.id).page(params[:page]).per(20)
  end

  def new
    @album = Album.new
    @from_url = params[:from_url].presence || 'menu'
    @groups =  current_user.groups
    @action = 'create'
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
    @groups =  current_user.groups
    @action = 'update'
  end

  def destroy
  end

  # [todo] ここに招待したユーザかどうかチェックするロジックをいれる
  def album_group_member?(album_id)
    @album = Album.find(album_id)
    if @album.user_id == current_user.try(:id)
      return
    end
    e_mail = current_user.try(:email) || params[:e_mail]
    unless e_mail
      redirect_to :root
    end
    unless GroupMember.where(group_id: params[:group_id]).where(e_mail: e_mail).exists 
      redirect_to :root
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :description, :group_id)
  end

end
