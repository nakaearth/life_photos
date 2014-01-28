class TwitterUser < User

  def create_account(auth)
    @new_user = User.find_or_create_by(email: auth[:extra][:raw_info][:email]) do|user|
      user.name  = auth[:extra][:raw_info][:name]
      user.email = auth[:extra][:raw_info][:email]
    end
    @provider = AuthProvider.find_or_create_by(provider: auth[:provider], user_id: @new_user.id) do |auth_provider|
      auth_provider.user_id = @new_user.id
      auth_provider.uid      = auth[:uid]
      auth_provider.provider = auth[:provider]
      unless auth[:extra].blank?
        auth_provider.screen_name = auth[:extra][:raw_info][:nickname]
        auth_provider.image_path  = auth[:extra][:raw_info][:image]
      end
      auth_provider.token = auth["credentials"]["token"] unless auth["credentials"].blank?
    end
    @new_user.login_provider =  @provider
    p @new_user.login_provider
    @new_user
  end
end
