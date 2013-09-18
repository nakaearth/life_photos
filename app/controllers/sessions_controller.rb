class SessionsController < ApplicationController
 def new
    redirect_to '/auth/' + (Rails.env.production? ? 'facebook' : 'developer')
  end

  def create 
    auth  = request.env["omniauth.auth"]
    @user = User.where(provider: auth["provider"]).where(uid: auth["uid"]).first || User.create_account(auth)
    session[:user_id] = @user.id
    redirect_to :root, notice:'login successfully.'
  end

  def destroy 
    session[:uid] = nil
  end
end
