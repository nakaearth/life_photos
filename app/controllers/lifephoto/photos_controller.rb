class Lifephoto::PhotosController < ApplicationController
  def index
    @photos = current_user.photos.page(params[:page]).per(10)
  end

  # api 表示用
  def my_list
    @photos = current_user.photos.page(1).per(5)
    render json: @photos
  end

  def show
    @photo = Photo.find(params[:id])
    @album = Album.find(@photo.album_id) if @photo.album_id
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @photo }
    end
  end

  # GET /photos/new
  # GET /photos/new.json
  def new
    @photo = Photo.new
    @albums = Album.where('user_id=?',session[:user_id]).latest
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @photo }
    end
  end

  # GET /photos/1/edit
  def edit
    @photo = Photo.find(params[:id])
    @albums = Album.where('user_id=?',session[:user_id]).latest
  end

  # POST /photos
  # POST /photos.json
  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    respond_to do |format|
      if @photo.save
        #send_push_message
        format.html { redirect_to @photo, notice: 'Photo was successfully created.' }
        format.json { render json: { :files => [@photo.photo.url(:thumb)]}, status: :created, location: @photo }
      else
        format.html { render action: "new" }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # Get multi upload
  def multi_upload
    @photo = Photo.new
    @albums = Album.where(user_id: session[:user_id]).latest
    respond_to do |format|
      format.html
      format.json { head :ok }
    end
  end


  # PUT /photos/1
  # PUT /photos/1.json
  def update
    @photo = Photo.find(params[:id])
    @photo.user_id = current_user.id
    #    @photo.album_id= params[:photo][:album_id]
    respond_to do |format|
      if @photo.update_attributes(photo_params)
        format.html { redirect_to @photo, notice: 'Photo was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end 

  def destroy
    @photo = Photo.find(params(:id))
    @photo.destroy
    #    @photo.delete_photo
    redirect_to photos_url ,notice: '写真を削除しました!'
  end

  private
  def photo_params
    params.require(:photo).permit(:photo, :title, :description, :album_id) 
  end

#  def send_push_message
#    Pusher['test_channel'].trigger('greet', {
#      :greeting => "Hello there!"
#    })
#  end
end
