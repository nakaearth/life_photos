class UserFactory
  def self.create_user(provider)
    if provider  == 'facebook'
      @user = FacebookUser.new 
    elsif provider == 'twitter'
      @user = TwitterUser.new 
    elsif provider == 'developer'
      @user = DeveloperUser.new 
    end
    @user
  end

end
