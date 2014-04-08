class Lifephoto::CommentController < ApplicationController
  def index
    p params[:photo_id]
    @photo = Photo.find(params[:photo_id])
    @photo_comments = @photo.photo_comments
    @comment = PhotoComment.new
  end

end
