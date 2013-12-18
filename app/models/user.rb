# coding: utf-8
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

class User < ActiveRecord::Base
  has_many :photos  
  has_many :albums  
  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :events 

  composed_of :fullscreenname ,
              class_name: "FullScreenName",
              mapping: [
                [:provider, :provider],
                [:screen_name, :name]
              ]

  def self.create_account(auth)
    if auth[:provider] == 'facebook'
      create_facebook_account auth
    elsif auth[:provider] == 'twitter'
      create_twitter_account auth
    elsif auth[:provider] == 'developer'
      create_developer_account auth
    end
  end

  # TODO 整理しよう。あとで
  def self.create_facebook_account(auth)
    User.new.tap do |user|
      user.uid      = auth[:uid]
      user.provider = auth[:provider]
      unless auth[:info].blank?
        user.name        = auth[:info][:name]
        user.screen_name = auth[:info][:nickname]
        user.image_path  = auth[:info][:image]
        user.email       = auth[:info][:email]
      end
      user.token = auth["credentials"]["token"] unless auth["credentials"].blank?
      user.save
    end
  end

  def self.create_twitter_account(auth)
    User.new.tap do |user|
      user.uid      = auth[:uid]
      user.provider = auth[:provider]
      unless auth[:info].blank?
        user.name        = auth[:info][:name]
        user.screen_name = auth[:info][:nickname]
        user.image_path  = auth[:info][:image]
        user.email       = auth[:info][:email]
      end
      user.token = auth["credentials"]["token"] unless auth["credentials"].blank?
      user.save
    end 
  end

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

class FullScreenName
  attr_reader :provider, :name

  def initialize(provider, name)
    @provider = provider
    @name = name
  end

  def to_s
    @name + "(" + @provider + ")"
  end
end
