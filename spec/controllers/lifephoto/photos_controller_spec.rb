require 'spec_helper'

describe Lifephoto::PhotosController do
  fixtures :users
  fixtures :photos

  describe "photo list" do
    context "index method" do
      before do
        @user = User.find(1)
        allow(controller).to receive(:current_user) { @user }
        get :index
      end
      it { expect(@user.photos).not_to be_nil }
      it { expect(@user.photos.size).to eql(5) }
      it { expect(render_template('index')) }
      it { expect(render_with_layout('photo')) }
      it { expect(respond_with(200)) }
      it { expect(get: '/lifephoto/photos').to route_to('lifephoto/photos#index') }
    end
  end

  describe "photo 投稿" do
    context "new method" do
      before do
        @user = User.find(1)
        allow(controller).to receive(:current_user) { @user }
        @albums = @user.albums
        allow(controller).to receive(:albums) { @albums }
        get :new
      end
      it { expect(@albums).not_to be_nil }
      it { expect(render_template('new')) }
      it { expect(render_with_layout('photo')) }
      it { expect(respond_with(200)) }
      it { expect(get: '/lifephoto/photos/new').to route_to('lifephoto/photos#new') }
    end

    context "create method" do
      before do
        @user = User.find(1)
        allow(controller).to receive(:current_user) { @user }
        @albums = @user.albums
        @file = File.new("spec/fixtures/test.png")
        @file.binmode
        @subject = Paperclip.io_adapters.for(@file)
        post :create,  photo: { title: 'test photo', description: "これはテストです", user_id: 1, album_id: 1, file: @subject }
      end
      it { expect(render_with_layout('photo')) }
      it { expect(respond_with(302)) }
#      it { expect(get: '/lifephoto/photos/show').to route_to('lifephoto/photos#new') }
    end
  end
end
