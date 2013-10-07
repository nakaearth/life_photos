require 'spec_helper'

describe Photo do
  fixtures :users
  fixtures :photos
  fixtures :albums

  describe "save photo test" do
    context "photo 投稿" do
      before do
        @file = File.new("spec/fixtures/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)
        @photo = Photo.new(title: 'test photo', description: "これはテストです", user_id: 1, album_id: 1)
      end

      it "photo save success" do
        expect(@photo.save!).to be_true
      end

      it "database check" do
        @photo.save
        saved_photo = Photo.where(title: 'test photo').first
        expect(saved_photo).not_to be_nil
        expect(saved_photo.title).to eql('test photo')
        @album = Album.find(1)
        expect(@album.photos).not_to be_nil
        expect(@album.photos.size).to eql(1)
      end
    end

    context "save photo error check(title is nil)" do
      before do
        @file = File.new("spec/fixtures/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)
        @photo = Photo.new(description: "これはテストです", user_id: 1)
      end

      it "save error" do
        expect(@photo).to have(1).error_on(:title)
      end
    end
  end
end
