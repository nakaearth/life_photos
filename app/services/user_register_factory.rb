class UserRegisterFactory
  def self.create_user_register(auth)
    if auth[:provider]  == 'facebook'
      @user = UserRegist::Facebook.new(auth) 
    elsif auth[:provider] == 'twitter'
      @user = UserRegist::Twitter.new(auth)
    elsif auth[:provider] == 'developer'
      @user = UserRegist::Developer.new(auth) 
    end
    @user
  end

end
