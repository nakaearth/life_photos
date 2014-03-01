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
  has_many :auth_providers
  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :events 

  attr_accessor :login_provider

  composed_of :fullscreenname ,
    class_name: "FullScreenName",
    mapping: [
      [:provider, :provider],
      [:name, :name]
  ]

  def self.find_by_email_and_provider(params)
    User.includes(:auth_providers).where("users.email"=> params[:email]).find_by("auth_providers.provider" => params[:provider])
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
