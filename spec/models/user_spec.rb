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
        expect(@user.provider).should eql('twitter')
        expect(@user.uid).to  eql('aabbcc112233')
        expect(@user.name).to be_nil
      end
    end
  end
end
