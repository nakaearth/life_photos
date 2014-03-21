# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :group_member1, class: GroupMember do
    e_mail 'test@gmail.com'
    invite_flag true
    token '1122334455'
  end
  factory :group_member2, class: GroupMember do
    e_mail 'test2@gmail.com'
    invite_flag true
    token 'AAABBCCDDrerw'
  end
  factory :group_member3, class: GroupMember do
    e_mail 'test3@gmail.com'
    invite_flag false 
    token 'dddrere1313DDrerw'
  end
end
