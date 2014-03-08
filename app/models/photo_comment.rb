class PhotoComment < ActiveRecord::Base
  belongs_to: photo, dependent: destroy
  belongs_to: user, dependent: destroy

  validates :message, presence: true

end
