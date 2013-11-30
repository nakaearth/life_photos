# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Group < ActiveRecord::Base
  has_many :users, through: :user_groups
  has_many :user_groups
  has_many :group_members

  validates :name , presence: true

  #[todo] implements no problem?
  def save_group(user)
    ActiveRecord::Base.transaction do
      save_group_datas do
        @user_group = UserGroup.new
        @user_group.user_id = user.id
        @user_group.group_id = id
        @user_group.save
        @member = GroupMember.new
        @member.e_mail = user.email
        @member.group_id = id
        @member.save
      end
    end
  end

  private
  def save_group_datas
    save
    yield
  end

end
