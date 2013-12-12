# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  title              :string(255)      not null
#  user_id            :integer          not null
#  description        :text
#  photo_file_name    :string(255)
#  photo_content_type :string(255)
#  photo_file_size    :integer
#  created_at         :datetime
#  updated_at         :datetime
#  album_id           :integer
#

class Photo < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  belongs_to :albums, counter_cache: true, dependent: :destroy
  has_one    :geo_map
  validates :title,  presence: true

  after_save :album_image_set

  Paperclip.interpolates :img_dir_num do |attachment, style|
    (attachment.instance.user_id).to_s + "/" + (attachment.instance.id * 0.01).to_s 
  end 

  S3_CREDENTIALS = { access_key_id: ENV['S3_ACCESS_KEY_ID'], secret_access_key: ENV['S3_SECRET_KEY'], bucket: "life-album-photos" }

  if Rails.env.production? 
    has_attached_file :photo,
      storage:  :s3,
      s3_credentials: S3_CREDENTIALS,
      styles: { medium:  "350x350>", thumb:  "100x100>", original:  "700x700>" },
      url:  ":s3_domain_url",
      path: "photos/:img_dir_num/:id/:style/:filename"
  else 
    has_attached_file :photo,
      url: "/system/img/attaches/:img_dir_num/:id/:style/:filename" ,
      styles:  { medium:  "350x350>", thumb:  "100x100>", original: "700x700>" }
  end

  def album_image_set
    ##ここにalbumにセットされている写真の枚数をチェックして、1枚ならその写真尾サムネールパスをalbum.top_img_pathにセット
    @album = Album.find(album_id)
    p photo.url(:thumb)
    @album.top_image_setup(photo.url(:thumb))
  end

end
