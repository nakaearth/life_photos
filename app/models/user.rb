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
