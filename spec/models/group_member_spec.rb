require 'spec_helper'

describe GroupMember do

  let! (:test_group) { FactoryGirl.create(:test_group1) }
  let! (:test_group2) { FactoryGirl.create(:test_group2) }
  let! (:test_group_member1) { FactoryGirl.create(:group_member1, group: test_group) }
  let! (:test_group_member2) { FactoryGirl.create(:group_member2, group: test_group) }
  let! (:test_group_member3) { FactoryGirl.create(:group_member3, group: test_group2) }

  it { expect have_db_column(:e_mail) }
  it { expect have_db_column(:group_id) }
 
  describe "same_group?メソッドをチェック" do
    context "is samm group? のtest."  do
      it { expect(GroupMember.same_group?(test_group_member1.e_mail, test_group_member2.e_mail)).to be true }
      it { expect(GroupMember.same_group?(test_group_member1.e_mail, test_group_member3.e_mail)).to be false }
    end
  end
end
