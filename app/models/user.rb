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
  include TwitterAccount
  include FacebookAccount
  include DeveloperAccount

  has_many :photos  
  has_many :albums  
  has_many :auth_providers
  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :events 

  composed_of :fullscreenname ,
    class_name: "FullScreenName",
    mapping: [
      [:provider, :provider],
      [:name, :name]
  ]

  def self.find_user_by_provider_and_uid(provider, uid)
    @auth = AuthProvider.where(provider: provider).where(uid: uid).first
    @user = where(user_id: @auth.user_id) if @auth
    nil unless @auth
  end

  def self.create_account(auth)
    if auth[:provider] == 'facebook'
      create_facebook_account auth
    elsif auth[:provider] == 'twitter'
      create_twitter_account auth
    elsif auth[:provider] == 'developer'
      create_developer_account auth
    end
  end

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

class FullScreenName
  attr_reader :provider, :name

  def initialize(provider, name)
    @provider = provider
    @name = name
  end

  def to_s
    p @name
    p @provider
    @name + "(" + @provider + ")"
  end
end
