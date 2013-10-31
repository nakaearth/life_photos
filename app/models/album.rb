# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  description :text
#  user_id     :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Album < ActiveRecord::Base
  belongs_to :users
  has_many  :photos

  validates :title, presence: true 

  scope :latest , -> { order('created_at DESC') }
end
