class Lifephoto::CommentController < ApplicationController
  def index
    @photo = Photo.find(params[:photo_id])
    @photo_comments = @photo.photo_comments
    @comment = PhotoComment.new
  end

end
