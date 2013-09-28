class Photo < ActiveRecord::Base
  belongs_to :user
  validates :title,  presence: true

  Paperclip.interpolates :img_dir_num do |attachment, style|
    (attachment.instance.id * 0.01).to_i
  end 

  S3_CREDENTIALS = { access_key_id: ENV['S3_ACCESS_KEY_ID'], secret_access_key: ENV['S3_SECRET_KEY'], bucket: "lifePhoto-bucket" }

  if Rails.env.production? 
    has_attached_file :photo,
      storage:  :s3,
      s3_credentials: S3_CREDENTIALS,
      styles: { medium:  "350x350>", thumb:  "100x100>", original:  "700x700>" },
      url:  ":s3_domain_url",
      path: "photos/:img_dir_num/:id/:style/:filename"
  else 
    has_attached_file :photo,
      url: "/system/img/attaches/:id/:style/:filename" ,
      styles:  { medium:  "350x350>", thumb:  "100x100>", original: "700x700>" }
  end

end