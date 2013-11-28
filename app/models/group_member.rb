class GroupMember < ActiveRecord::Base
  belongs_to :group

  validates :e_mail, presence: true
  validates :group_id , presence: true
end