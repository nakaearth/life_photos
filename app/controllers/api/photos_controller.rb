class Api::PhotosController < Api::ApplicationController
  def index
    @user = User.find_by_email_and_provider(params)
    if @user
      @photos = @user.photos 
      if derived_version >= 2
        @albums = @user.albums 
      end
    end
  rescue ActiveRecord::RecordNotFound => rnf
    logger.error rnf
  end

end
