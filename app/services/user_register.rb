class  UserRegister

  def find_user_by_provider_and_uid
    @auth_provider = AuthProvider.where(provider: @auth[:provider]).where(uid: @auth[:uid]).first
    @user = User.where(user_id: @auth_provider.user_id) if @auth_provider
    nil unless @auth_provider
  end

  def create_account(auth)
    nil
  end
end
