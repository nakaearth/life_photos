# Read about factories at https://github.com/thoughtbot/factory_girl

include ActionDispatch::TestProcess

FactoryGirl.define do
  factory :current_user_photo1, class: Photo do
    title "test photo"
    sequence(:description) { |n| "MyText#{n}" }
    photo_file_name "MyString"
    photo_content_type "MyString"
    photo_file_size 1
    photo { fixture_file_upload([Rails.root, "spec", "factories", "test.png"].join("/"), "image/jpg")  }
  end

end
