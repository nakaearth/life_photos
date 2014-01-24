# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :auth_provider do
    user_id 1
    provider "MyString"
    uid "MyString"
    screen_name "MyString"
    image_path "MyString"
    token "MyString"
    secret "MyString"
  end
end
