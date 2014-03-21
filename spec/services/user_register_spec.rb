require 'spec_helper'

describe UserRegister do
  fixtures :users
  fixtures :auth_providers

  describe "create_account method test" do
    context "first login by omniauth normal test" do
      before do
        auth  = { provider: 'twitter',  uid:  'aabbbcc11111', extra: { raw_info: { email: 'test2@gmail.com', name: 'test test', nickname: 'test test' } } }
        @service = UserRegisterFactory.create_user_register(auth)
        @user = @service.create_account 
      end
      #  subject { @user }
      #  expectが使えない
      it "login success?" do
        expect(@user).not_to be_nil
      end
      it "test attribute check" do
        provider = @user.login_provider
        expect(@user.login_provider).not_to be_nil
      end
      it "test attribute check" do
        provider = @user.login_provider
        expect(provider.provider).to eql('twitter')
      end
      it "test attribute check" do
        provider = @user.login_provider
        expect(provider.uid).to eql('aabbbcc11111')
      end
      it "test attribute check" do
        provider = @user.login_provider
        expect(@user.email).to eql('test2@gmail.com')
      end
    end

    context "first login by omniauth normal test(facebook account)" do
      before do
        auth  = { provider: 'facebook',  uid:  'facebook11111', info: { email: 'test3@gmail.com', name: 'test test3', nickname: 'test test' } } 
        @service = UserRegisterFactory.create_user_register(auth)
        @user = @service.create_account
      end

      it "login success?" do
        expect(@user).not_to be_nil
      end

      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('facebook')
      end
      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].uid).to eql('facebook11111')
      end
      it "test attribute check" do
        providers = @user.auth_providers
        expect(@user.email).to eql('test3@gmail.com')
      end
    end

    context "first login by omniauth normal test(developer account)" do
      before do
        auth  = { provider: 'developer',  uid:  'developer11111', info: { email: 'test4@gmail.com', name: 'test test3', nickname: 'test test' } } 
        @service = UserRegisterFactory.create_user_register(auth)
        @user = @service.create_account
      end

      it "login success?" do
        expect(@user).not_to be_nil
      end

      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('developer')
      end
      it "test attribute check" do
        providers = @user.auth_providers
        expect(providers[0].uid).to eql('developer11111')
      end
      it "test attribute check" do
        providers = @user.auth_providers
        expect(@user.email).to eql('test4@gmail.com')
      end
    end

    context "second login by omniauth test" do
      before do
        auth  = { provider: 'twitter' , uid: 'aabbcc112233', extra: { raw_info: { email: 'test2@gmail.com' } } }
        @service = UserRegisterFactory.create_user_register(auth)
        @user = @service.create_account
      end

      it "login success? " do
        expect(@user).not_to be_nil
      end

      it "attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('twitter')
      end
      it "attribute check" do
        providers = @user.auth_providers
        expect(providers[0].uid).to  eql('aabbcc112233')
      end
      it "attribute check" do
        providers = @user.auth_providers
        expect(@user.name).to be_nil
      end
    end

    context "exist regist account login" do
      before do
        auth  = { provider: 'twitter' , uid: 'aabbccdd112233', extra: { raw_info: { email: 'test@gmail.com' } } }
        @service = UserRegisterFactory.create_user_register(auth)
        @user = @service.create_account
      end

      it "login success? " do
        expect(@user).not_to be_nil
      end

      it "attribute check" do
        providers = @user.auth_providers
        expect(providers[0].provider).to eql('twitter')
      end
      it "attribute check" do
        providers = @user.auth_providers
        expect(providers[0].uid).to  eql('aabbccdd112233')
      end
      it "attribute check" do
        providers = @user.auth_providers
        expect(@user.name).to eql('test_user')
      end

    end
  end

end
