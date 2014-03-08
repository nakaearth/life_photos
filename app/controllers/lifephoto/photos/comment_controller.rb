class Lifephoto::Photos::CommentController < ApplicationController
  def index
    @comments = Photo.find(params(:photo_id)).comments
  end
end
