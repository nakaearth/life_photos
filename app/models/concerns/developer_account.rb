module DeveloperAccount
  extend ActiveSupport::Concern

  module ClassMethods
    def self.create_developer_account(auth)
      User.new.tap do |user|
        user.uid      = auth[:uid]
        user.provider = auth[:provider]
        unless auth[:info].blank?
          user.name        = "developer"
          user.screen_name = "dev dev"
          user.image_path  = auth[:info][:image]
          user.email       = auth[:info][:email]
        end
        user.token = auth["credentials"]["token"] unless auth["credentials"].blank?
        user.save
      end
    end
  end
end
