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
#

require 'spec_helper'

describe User do
  fixtures :users

  describe "create_with_omniauth method test" do
    context "first login by omniauth normal test" do
      before do
        auth  = { provider: 'twitter' , uid:  'aabbbcc11111' }
        @user = User.create_twitter_account auth
      end

      it "login success?" do
        expect(@user).not_to be_nil
      end

      it "test attribute check" do
        expect(@user.provider).to eql('twitter')
        expect(@user.uid).to eql('aabbbcc11111')
      end
    end

    context "second login by omniauth test" do
      before do
        auth  = { provider: 'twitter' , uid: 'aabbcc112233' }
        @user = User.create_twitter_account auth
      end

      it "login success? " do
        expect(@user).not_to be_nil
      end

      it "attribute check" do
        expect(@user.provider).to eql('twitter')
        expect(@user.uid).to  eql('aabbcc112233')
        expect(@user.name).to be_nil
      end
    end
  end

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
        expect(@user.save).to be_true
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
        expect(@group).to have(1).errors_on(:name)
      end
    end
  end
end
