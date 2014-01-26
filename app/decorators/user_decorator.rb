module UserDecorator
  
  def image_path
    auth_providers[0].image_path
  end

  def screen_name
    auth_providers[0].screen_name
  end
end
