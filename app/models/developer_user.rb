class DeveloperUser < User

  def create_account(auth)
    @new_user = User.find_or_create_by(email: auth[:info][:email])  do|user|
      user.name  = "developer"
      user.email = auth[:info][:email]
    end
    @auth_provider =  AuthProvider.find_or_create_by(provider: auth[:provider], user_id: @new_user.id) do |auth_pro|
      auth_pro.user_id = @new_user.id
      auth_pro.uid      = auth[:uid]
      auth_pro.provider = auth[:provider]
      unless auth[:info].blank?
        auth_pro.screen_name = "dev dev"
        auth_pro.image_path  = auth[:info][:image]
      end
      auth_pro.token = auth["credentials"]["token"] unless auth["credentials"].blank?
    end
    @new_user.login_provider =  @auth_provider
    @new_user
  end
end
