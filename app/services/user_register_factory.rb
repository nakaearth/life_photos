class UserRegisterFactory
  def self.create_user_register(auth)
    if auth[:provider]  == 'facebook'
      @user = FacebookUserRegister.new(auth) 
    elsif auth[:provider] == 'twitter'
      @user = TwitterUserRegister.new(auth)
    elsif auth[:provider] == 'developer'
      @user = DeveloperUserRegister.new(auth) 
    end
    @user
  end

end
