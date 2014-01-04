class Video < ActiveRecord::Base
  validates :panda_video_id,  presence: true

  def panda_video
    @panda_video ||= Panda::Video.find(panda_video_id)
  end
end
