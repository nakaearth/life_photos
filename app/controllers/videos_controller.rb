class VideosController < ApplicationController
  def show
    @video = Video.find(params[:id])
    @original_videao = @video.panda_videao
    @h264e = @original_videao.encodings["h264"]
  end

  def create
    @video = Video.create!(video_params)
    redirect_to :action => :show, :id => @video.id
  end

  def new
    @video = Video.new  
  end

  private
  def video_params
    params.require(:video).permit( :title )
  end

end
