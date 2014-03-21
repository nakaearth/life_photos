# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :current_user_group1, class: Group do
   name "Test_group"
  end
  factory :test_group1, class: Group do
    name "Test_group1"
  end
  factory :test_group2, class: Group do
    name "Test_group2"
  end
end
