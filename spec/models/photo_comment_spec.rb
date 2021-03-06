require 'spec_helper'

describe PhotoComment do
  let!(:test_group) { FactoryGirl.create(:current_user_group1) }
  let!(:test_user1) { FactoryGirl.create(:current_user) }
  let!(:test_album) {  FactoryGirl.create(:current_user_album1, user: test_user1, group: test_group) }
  let!(:photo1) { FactoryGirl.create(:current_user_photo1, user: test_user1, album: test_album) }
  #let!(:test_photo_comment1) { FactoryGirl.create(:photo_comment1, user: test_user1, photo: photo1) }

  describe "関連やバリデーションをテスト" do
#    it { expect belong_to(:photo) }
#    it { expect belong_to(:user) }
    it { expect have_db_column(:message) }
    it { expect have_db_column(:photo_id) }
    it { expect validate_presence_of(:message) }
  end
  
  context "コメント投稿" do
    before do
        
    end

    it "normal case" do
    end

  end
end
