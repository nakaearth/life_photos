class API < Grape::API
  prefix "api"
  version 'v1', using: :path
  format :json
  #    formatter :json, Grape::Formatter::Rabl
  default_format :json

  #    helpers do
  #      def photos_parameter
  ##        ActionController::Parameters.new(params).permit(:title)
  #      end
  #    end

  resource "albums" do
    params do
      requires :id, type: Integer
    end
    get :id, rabl: 'albums'   do
      @albums = User.find(params[:id]).albums
    end
  end

  #  resource :photo do
  #    get '/' , rabl: 'photo' do
  #
  #    end
  #  end
end
