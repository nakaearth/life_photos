require 'spec_helper'

describe AlbumsController do
  fixtures :users
  fixtures :albums
  fixtures :photos

  describe "albums list" do
    context "index method" do
      before do
        @user = User.find(1)
        allow(controller).to receive(:current_user) { @user }
        get :index
      end
      it { expect(@user.albums).not_to be_nil }
      it { expect(@user.albums.size).to eql(3) }
      it { expect(render_template('index')) } 
      it { expect(render_with_layout('album')) }
      it { expect(respond_with(200)) }
      # it { expect route(:get, '/albums').to('albums#index') }
    end
  end

  describe "album list(guest) " do
    context "guest_user_show method" do
      before do
        #        @user = User.find(1)
        #        controller.sutb(:current_user) { @user }
        @album = Album.find(1)
        get :guest_user_show , id: 1
      end
      it { expect(@album).not_to be_nil }
      it { expect(render_template('guest_user_show')) }
      # it { expect route(:get, '/albums/1/guest_user_show').to('albums#guest_user_show', id: 1) }
    end
  end
end
