require 'spec_helper'

describe Lifephoto::CommentController do

  describe "GET 'index method'" do
    let!(:test_group1) { FactoryGirl.create(:test_group1) }
    let!(:current_user) { FactoryGirl.create(:current_user) }
    let!(:auth_provider1) { FactoryGirl.create(:current_user_auth_provider, user: current_user) }
    let!(:test_album1) { FactoryGirl.create(:current_user_album1) }
    let!(:test_photo1) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }

    context "ログイン後にphotoの詳細からコメント一覧を表示" do
      before do
        @user = current_user
        allow(controller).to receive(:current_user) { @user }
        get 'index', photo_id: test_photo1.id
      end
      it "returns http success" do
        p response.body
#        expect(response).to be_success
      end
    end
  end

end
