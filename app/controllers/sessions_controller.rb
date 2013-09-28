class SessionsController < ApplicationController
 def new
    redirect_to '/auth/' + (Rails.env.production? ? params[:provider] : 'developer')
  end

  def create 
    auth  = request.env["omniauth.auth"]
    @user = User.where(provider: auth["provider"]).where(uid: auth["uid"]).first || User.create_account(auth)
    session[:user_id] = @user.id
    logger.info @user
    #redirect_to :root, notice:'login successfully.'
    redirect_to controller: 'top', action: 'index', notice:'login successfully.'
  end

  def destroy 
    session[:user_id] = nil
    redirect_to controller: 'top', action: 'index', notice:'login successfully.'
  end

  def oauth_failure
    flash[:notice] = "キャンセルしました。"
    redirect_to "/"
  end
end
