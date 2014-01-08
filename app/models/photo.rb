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
  belongs_to :album,  dependent: :destroy, touch: true
  has_one    :geo_map

  validates :title,  presence: true

  after_save :album_image_set
  after_save :send_notice_mail

  #  before_save :setup_title  

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
    @album.top_image_setup(photo.url(:thumb))
  end

  def send_notice_mail
    #  group_memberの一覧を取ってリストをまわしてメールを来る
    return unless album_id
    @album = Album.find(album_id)
    return unless @album.group_id
    @group = Group.find(@album.group_id)
    @group_members = GroupMember.where(group_id: @group.id)
    @group_members.each do |group_member|
      PostPhotoMailer.send_notice_photo_mail(group_member, album_id).deliver
    end
  end
end
