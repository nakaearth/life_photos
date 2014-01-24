# coding: utf-8

module FacebookAccount
  extend ActiveSupport::Concern

  module ClassMethods
    def self.create_facebook_account(auth)
      @new_user = User.where(email: auth[:info][:email]).first_or_create  do |user|
        user.name  = auth[:info][:name]
        user.email = auth[:info][:email]
      end
      AuthProvider.where(provider: auth[:provider]).where(user_id: auth[:user_id]).first_or_create do |auth_provider|
        auth_provider.user_id = @new_user.id
        auth_provider.uid      = auth[:uid]
        auth_provider.provider = auth[:provider]
        unless auth[:info].blank?
          auth_provider.screen_name = auth[:info][:nickname]
          auth_provider.image_path  = auth[:info][:image]
          auth_provider.email       = auth[:info][:email]
        end
        auth_provider.token = auth["credentials"]["token"] unless auth["credentials"].blank?
        auth_provider.save
      end
      @new_user
    end
  end
end
