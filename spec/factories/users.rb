FactoryGirl.define do
  factory :current_user, class: User  do
    name   'test_user'
    email   'test@gmail.com'
  end

end
