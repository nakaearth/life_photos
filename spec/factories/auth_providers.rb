# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :current_user_auth_provider, class: AuthProvider do
    provider "MyString"
    uid "MyString"
    screen_name "MyString"
    image_path "MyString"
    token "MyString"
    secret "MyString"
  end
end
