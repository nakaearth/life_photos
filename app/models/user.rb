# coding: utf-8

class User < ActiveRecord::Base
  has_many :photos  

  def self.create_account(auth)
    if auth[:provider] == 'facebook'
      create_facebook_account auth
    elsif auth[:provider] == 'twitter'
      create_twitter_account auth
    end
  end

  # TODO 整理しよう。あとで
  def self.create_facebook_account(auth)
    @user          = User.new
    @user.uid      = auth[:uid]
    @user.provider = auth[:provider]
    unless auth[:info].blank?
      @user.name        = auth[:info][:name]
      @user.screen_name = auth[:info][:nickname]
      @user.image_path  = auth[:info][:image]
    end
    @user.token = auth["credentials"]["token"] unless auth["credentials"].blank?
    @user.save
    @user
  end

  def self.create_twitter_account(auth)
    @user          = User.new
    @user.uid      = auth[:uid]
    @user.provider = auth[:provider]
    unless auth[:info].blank?
      @user.name        = auth[:info][:name]
      @user.screen_name = auth[:info][:nickname]
      @user.image_path  = auth[:info][:image]
    end
    @user.token = auth["credentials"]["token"] unless auth["credentials"].blank?
    @user.save
    @user
  end
end
