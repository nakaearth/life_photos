# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  title              :string(255)      not null
#  user_id            :integer          not null
#  description        :text
#  photo_file_name    :string(255)
#  photo_content_type :string(255)
#  photo_file_size    :integer
#  created_at         :datetime
#  updated_at         :datetime
#  album_id           :integer
#

require 'spec_helper'

describe Photo do

  let!(:test_group) { FactoryGirl.create(:current_user_group1) }
  let!(:test_user1) { FactoryGirl.create(:current_user) }
  let!(:auth_provider1) { FactoryGirl.create(:current_user_auth_provider, user: test_user1) }
  let!(:test_album) {  FactoryGirl.create(:current_user_album1, user: test_user1, group: test_group) }
  let!(:photo1) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo2) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo3) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo4) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:photo5) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }

  describe "save photo test" do

    #it { expect belong_to(:album) }
    it { expect have_many(:photo_comment) }
    it { expect have_db_column(:user_id) }
    it { expect have_db_column(:album_id) }
    it { expect have_db_index(:album_id) }
    it { expect have_db_index(:user_id) }
    it { expect validate_presence_of(:title) }

    context "photo 投稿" do
      before do
        @file = File.new("spec/factories/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)
        @photo = Photo.new(title: "test photo", description: "これはテストです", user_id: test_user1.id, album_id: test_album.id, photo: @subject)
        @photo.save
      end

      it "database check" do
        saved_photo = Photo.where(title: 'test photo').first
        expect(saved_photo).not_to be_nil
      end
      it "save photo titleの確認" do
        saved_photo = Photo.where(title: 'test photo').first
        expect(saved_photo.title).to eql('test photo')
      end
      it "画像投稿でアルバムとちゃんと関連つけられているか" do
        expect(test_album.photos).not_to be_nil
      end
      it "画像投稿でアルバムとちゃんと関連つけられているか2" do
        expect(test_album.photos.size).to be >= 6
      end

      it "album top image" do
        expect(test_album.top_img_path).not_to be_nil
      end
    end

    context "save photo error check(title is nil)" do
      before do
        @file = File.new("spec/fixtures/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)
        @photo = Photo.new(description: "これはテストです", user_id: test_user1.id, photo: @subject)
      end

      it "save error" do
        expect(@photo.error_on(:title).size).to eq(1)
      end
    end
  end
end
