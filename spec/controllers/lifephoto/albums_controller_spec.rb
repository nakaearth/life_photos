require 'spec_helper'

describe Lifephoto::AlbumsController do

  let!(:test_group1) { FactoryGirl.create(:test_group1) }
  let!(:current_user) { FactoryGirl.create(:current_user) }
  let!(:auth_provider1) { FactoryGirl.create(:current_user_auth_provider, user: current_user) }
  let!(:test_album1) { FactoryGirl.create(:current_user_album1, user: current_user) }
  let!(:test_photo1) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo2) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo3) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo4) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo5) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo6) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo7) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }
  let!(:test_photo8) { FactoryGirl.create(:current_user_photo1, user: current_user, album: test_album1) }

  describe "albums list" do
    context "index method" do
      before do
        @user = current_user
        allow(controller).to receive(:current_user) { @user }
        get :index
      end
      it { expect(@user.albums).not_to be_nil }
      it { expect(@user.albums.size).to eql(1) }
      it { expect(render_template('index')) } 
      it { expect(render_with_layout('album')) }
      it { expect(respond_with(200)) }
      it { expect(get: '/lifephoto/albums').to route_to('lifephoto/albums#index') }
    end
  end

  describe "album list(guest) " do
    context "guest_user_show method" do
      before do
        @album = test_album1
        get :guest_user_show , id: 1
      end
      it { expect(@album).not_to be_nil }
      it { expect(render_template('guest_user_show')) }
      it { expect(get: '/lifephoto/albums/1/guest_user_show').to route_to(controller: 'lifephoto/albums' , action:  'guest_user_show', id: '1') }
      # it { expect route(:get, '/albums/1/guest_user_show').to('albums#guest_user_show', id: 1) }
    end
  end
end
