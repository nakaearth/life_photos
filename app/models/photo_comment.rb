class PhotoComment < ActiveRecord::Base
  belongs_to :photo
  belongs_to :user
  validates :message, presence: true
end
