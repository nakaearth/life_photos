module TwitterAccount
  extend ActiveSupport::Concern

  module ClassMethods
    def create_twitter_account(auth)
      User.new.tap do |user|
        user.uid      = auth[:uid]
        user.provider = auth[:provider]
        unless auth[:extra].blank?
          user.name        = auth[:extra][:raw_info][:name]
          user.screen_name = auth[:extra][:raw_info][:nickname]
          user.image_path  = auth[:extra][:raw_info][:image]
          user.email       = auth[:extra][:raw_info][:email]
        end
        user.token = auth["credentials"]["token"] unless auth["credentials"].blank?
        user.save
      end 
    end
  end
end
