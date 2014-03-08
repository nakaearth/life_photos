require 'spec_helper'

describe PhotoComment do
  let!(:test_user1) { FactoryGirl.create(:current_user) }
  let!(:photo1) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:test_photo_comment1) { FactoryGirl.create(:photo_comment1, user: test_user1, photo: photo1) }

  describe "関連をテスト" do
    it { expect belong_to(:photo) }
    it { expect belong_to(:user) }

  end
  
end
