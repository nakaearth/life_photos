# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :current_user_album1, class: Album do
    title "test_album"
    sequence(:description) { |n| "MyText#{n}" }
    group_id 1
  end

end
