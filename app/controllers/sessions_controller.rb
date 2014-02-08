class SessionsController < ApplicationController
  skip_before_action :login?, :only => [:new, :create, :destroy, :oauth_failure]
  def new
    redirect_to '/auth/' + (Rails.env.production? ? params[:provider] : 'developer')
  end

  def create 
    auth  = request.env["omniauth.auth"]
    @service = UserRegisterFactory.create_user_register(auth)
    @user = @service.find_user_by_provider_and_uid || @service.create_account
    session[:user_id] = @user.id
    logger.info @user
    redirect_to controller: 'lifephoto/top', action: 'index', notice:'login successfully.'
  end

  def destroy 
    session[:user_id] = nil
    redirect_to controller: 'lifephoto/top', action: 'index', notice:'login successfully.'
  end

  def oauth_failure
    flash[:notice] = "キャンセルしました。"
    redirect_to "/"
  end
end
