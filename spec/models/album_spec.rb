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

  let!(:test_group) { FactoryGirl.create(:current_user_group1) }
  let!(:test_user1) { FactoryGirl.create(:current_user) }
  let!(:auth_provider1) { FactoryGirl.create(:current_user_auth_provider, user: test_user1) }
  let!(:test_album) {  FactoryGirl.create(:current_user_album1, user: test_user1, group: test_group) }
  let!(:photo1) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo2) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo3) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo4) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo5) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }


  it { expect have_many(:photos) }
#  it { expect belong_to(:users) }
  it { expect have_db_column(:user_id) }
  it { expect have_db_index(:user_id) }

  describe "album list" do
    context "user album list" do
      before do
        @user = test_user1
      end
      it "album list check" do
        expect(@user.albums).not_to be_nil
        expect(@user.albums.size).to eql(1)
      end
    end
  end

  describe "album create" do
    context "user album create" do
      before do
        @user = test_user1
        @album = test_album
      end
      it "album create success?" do
        expect(@album.save).to be_truthy
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
        @user = test_user1

        @file = File.new("spec/fixtures/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)

        @album = test_album
      end
      it "created data check" do
        expect(@album.id).not_to be_nil
        expect(@album.user_id).to eql(@user.id)
        expect(@album.photos.size).to eql(8)
      end
    end

    context "user album create error case" do
      before do
        @user = test_user1
        @album = Album.new(description: 'MyString8', group: test_group)
      end
      it "album create success?" do
        expect(@album).not_to be_valid
      end

    end
  end
end
