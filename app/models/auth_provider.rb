class AuthProvider < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  
end
