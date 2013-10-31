# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  description :text
#  user_id     :integer
#  created_at  :datetime
#  updated_at  :datetime
#

require 'spec_helper'

describe Album do
  fixtures :users
  fixtures :users
  fixtures :albums

  describe "album list" do
    context "user album list" do
      before do
        @user = User.find(1)
      end
      it "album list check" do
        expect(@user.albums).not_to be_nil
        expect(@user.albums.size).to eql(2)
      end
    end
  end

  describe "album create" do
    context "user album create" do
      before do
        @user = User.find(1)
        @album = Album.new(title: "create test title", description: "test album")
        @album.user_id =  @user.id
      end
      it "album create success?" do
        expect(@album.save).to be_true
      end
      it "created data check" do
        @album.save
        #@album_data = Album.where(title: "create test title").first
        expect(@album.id).not_to be_nil
        expect(@album.user_id).to eql(@user.id)
      end
    end

    context "user album create error case" do
       before do
        @user = User.find(1)
        @album = Album.new(description: "test album")
        @album.user_id =  @user.id
      end
      it "album create success?" do
        expect(@album).not_to be_valid
      end
      
    end
  end
end
