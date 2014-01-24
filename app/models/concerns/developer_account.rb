module DeveloperAccount
  extend ActiveSupport::Concern

  module ClassMethods
    def self.create_developer_account(auth)
      @new_user = User.where(email: auth[:info][:email]).first_or_create  do|user|
        user.name  = "developer"
        user.email = auth[:info][:email]
      end
      AuthProvider.where(provider: auth[:provider]).where(user_id: @new_user.id).first_or_create do |auth_pro|
        auth_pro.user_id = @new_user.id 
        auth_pro.uid      = auth[:uid]
        auth_pro.provider = auth[:provider]
        unless auth[:info].blank?
          auth_pro.screen_name = "dev dev"
          auth_pro.image_path  = auth[:info][:image]
        end
        auth_pro.token = auth["credentials"]["token"] unless auth["credentials"].blank?
        auth_pro.save
      end
      @new_user
    end
  end
end
