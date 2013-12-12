# == Schema Information
#
# Table name: group_members
#
#  id          :integer          not null, primary key
#  e_mail      :string(255)      not null
#  group_id    :integer
#  invite_flag :boolean          default(FALSE), not null
#  token       :string(255)
#

class GroupMember < ActiveRecord::Base
  belongs_to :group

  validates :e_mail, presence: true
  validates :group_id , presence: true, uniqueness: { scope: :e_mail } 
end
