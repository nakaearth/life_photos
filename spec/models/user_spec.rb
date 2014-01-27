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

  describe "create_with_omniauth method test" do
    context "first login by omniauth normal test" do
      before do
        auth  = { provider: 'twitter',  uid:  'aabbbcc11111', extra: { raw_info: { email: 'test2@gmail.com', name: 'test test', nickname: 'test test' } } }
        @user = User.create_account auth
      end
      #  subject { @user }
      #  expectが使えない
      it "login success?" do
        expect(@user).not_to be_nil
      end

      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('twitter')
        expect(providers[0].uid).to eql('aabbbcc11111')
        expect(@user.email).to eql('test2@gmail.com')
        #        expect(@user.fullscreenname.to_s).to eql('test test(twitter)')
      end
    end

    context "first login by omniauth normal test(facebook account)" do
      before do
        auth  = { provider: 'facebook',  uid:  'facebook11111', info: { email: 'test3@gmail.com', name: 'test test3', nickname: 'test test' } } 
        @user = User.create_account auth
      end

      it "login success?" do
        expect(@user).not_to be_nil
      end

      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('facebook')
        expect(providers[0].uid).to eql('facebook11111')
        expect(@user.email).to eql('test3@gmail.com')
        #        expect(@user.fullscreenname.to_s).to eql('test test(twitter)')
      end
    end
    context "first login by omniauth normal test(developer account)" do
      before do
        auth  = { provider: 'developer',  uid:  'developer11111', info: { email: 'test4@gmail.com', name: 'test test3', nickname: 'test test' } } 
        @user = User.create_account auth
      end

      it "login success?" do
        expect(@user).not_to be_nil
      end

      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('developer')
        expect(providers[0].uid).to eql('developer11111')
        expect(@user.email).to eql('test4@gmail.com')
        #        expect(@user.fullscreenname.to_s).to eql('test test(twitter)')
      end
    end



    context "second login by omniauth test" do
      before do
        auth  = { provider: 'twitter' , uid: 'aabbcc112233', extra: { raw_info: { email: 'test2@gmail.com' } } }
        @user = User.create_account auth
      end

      it "login success? " do
        expect(@user).not_to be_nil
      end

      it "attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('twitter')
        expect(providers[0].uid).to  eql('aabbcc112233')
        expect(@user.name).to be_nil
      end
    end

    context "exist regist account login" do
      before do
        auth  = { provider: 'twitter' , uid: 'aabbccdd112233', extra: { raw_info: { email: 'test@gmail.com' } } }
        @user = User.create_account auth
      end

      it "login success? " do
        expect(@user).not_to be_nil
      end

      it "attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('twitter')
        expect(providers[0].uid).to  eql('aabbccdd112233')
        expect(@user.name).to eql('test_user')
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
