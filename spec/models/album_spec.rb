# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  title              :string(255)
#  description        :text
#  user_id            :integer
#  created_at         :datetime
#  updated_at         :datetime
#  top_img_path       :string(255)      default("no_image.jpg"), not null
#  album_photos_count :integer          default(0), not null
#

require 'spec_helper'

describe Album do
  fixtures :users
  fixtures :users
  fixtures :albums
  fixtures :photos

  it { expect have_many(:photos) }
  it { expect belong_to(:users) }
  it { expect have_db_column(:user_id) }
  it { expect have_db_index(:user_id) }

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

    context "user album create and add photo" do
      before do
        @user = User.find(1)
        @file = File.new("spec/fixtures/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)
        @album = Album.new(title: "create test title", description: "test album")
        @album.user_id =  @user.id
        @album.save
        @photo = Photo.new(title: 'test photo', description: "これはテストです", user_id: 1, album_id: @album.id)
        @photo.save
      end
      it "created data check" do
        expect(@album.id).not_to be_nil
        expect(@album.user_id).to eql(@user.id)
        expect(@album.photos.size).to eql(1)
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
