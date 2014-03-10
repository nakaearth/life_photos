require 'spec_helper'

describe PhotoComment do
  let!(:test_group) { FactoryGirl.create(:current_user_group1) }
  let!(:test_user1) { FactoryGirl.create(:current_user) }
  let!(:auth_provider1) { FactoryGirl.create(:current_user_auth_provider, user: test_user1) }
  let!(:test_album) {  FactoryGirl.create(:current_user_album1, user: test_user1, group: test_group) }
  let!(:photo1) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  let!(:test_photo_comment1) { FactoryGirl.create(:photo_comment1, user: test_user1, photo: photo1) }

  describe "関連をテスト" do
#    it { expect belong_to(:photo) }
#    it { expect belong_to(:user) }
  end
  
end
