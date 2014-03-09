# == Schema Information
#
# Table name: users
#
#  id          :integer          not null, primary key
#  provider    :string(255)      not null
#  uid         :string(255)      not null
#  name        :string(255)
#  screen_name :string(255)
#  image_path  :string(255)
#  token       :string(255)
#  secret      :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  email       :string(255)
#

require 'spec_helper'

describe User do

  let!(:user1) { FactoryGirl.create(:current_user) }
  let!(:auth_provider1) {  FactoryGirl.create(:current_user_auth_provider, user: user1) } 
  let!(:photo1) { FactoryGirl.build(:current_user_photo1, user: user1) }
  let!(:photo2) { FactoryGirl.build(:current_user_photo1, user: user1) }
  let!(:photo3) { FactoryGirl.build(:current_user_photo1, user: user1) }
  let!(:photo4) { FactoryGirl.build(:current_user_photo1, user: user1) }
  let!(:photo5) { FactoryGirl.build(:current_user_photo1, user: user1) }

  describe "check user photos" do

    context "check user photo" do
      before do
        @user = user1
      end
      it "check photo" do
        expect(@user.photos).not_to be_nil
      end
      it "photo count" do
        expect(@user.photos.count).to eql(Photo.where(user_id: @user.id).count)
      end
    end
  end

  describe "group member" do
    fixtures :groups

    context "user join the group" do
      before do
        @current_user = user1
        @group = Group.find(1)
      end
      it "group " do
        @current_user.groups << @group
        expect(@current_user.save).to be_truthy
        @user = User.find(@current_user.id)
        expect(@user.groups.size).to eql(1)
      end
    end
  end

  describe "group save test" do
    context "group save error check" do
      before do
      end
      it "save test" do
        @group = Group.new
        expect(@group).not_to be_valid
        expect(@group.errors_on(:name).size).to eq(1)
      end
    end
  end
end
