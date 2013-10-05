class Album < ActiveRecord::Base
  belongs_to :users
  has_many  :photos

  validates :title, presence: true 

  scope :latest , -> { order('created_at DESC') }
end
