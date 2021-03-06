# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  title              :string(255)
#  description        :text
#  user_id            :integer
#  created_at         :datetime
#  updated_at         :datetime
#  top_img_path       :string(255)      default("no_image.jpg"), not null
#  album_photos_count :integer          default(0), not null
#

class Album < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  has_many  :photos, counter_cache: true
  belongs_to :group

  validates :title, presence: true 

  scope :latest , -> { order('created_at DESC') }

  def top_image_setup(image_path)
    # アルバムのidから該当するアルバムに写真が１枚以上ならば、top_img_pathをセットする
    if photos.empty?
      top_img_path = image_path
      save
    end
  end
end
