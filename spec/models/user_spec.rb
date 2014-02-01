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
  fixtures :users
  fixtures :auth_providers

  describe "check user photos" do
    fixtures :photos

    context "check user photo" do
      before do
        @user = User.find(1)
      end
      it "check photo" do
        expect(@user.photos).not_to be_nil
      end
      it "photo count" do
        expect(@user.photos.count).to eql(Photo.where(user_id: 1).count)
      end
    end
  end

  describe "group member" do
    fixtures :groups

    context "user join the group" do
      before do
        @user = User.find(1)
        @group = Group.find(1)
      end
      it "group " do
        @user.groups << @group
        expect(@user.save).to be_truthy
        @user = User.find(1)
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
