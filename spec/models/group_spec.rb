require 'spec_helper'

describe Group do
  fixtures :users

  describe "save method" do
    context "new group　作成" do
      before do
        @user = User.find(1)
        @group = Group.new
        @group.name = "test group"
      end
      it "group save?" do
        expect(@group.save_group(@user)).to be_true
      end
      it "model check" do
        @group.save_group(@user)
        @members = @group.group_members
        expect(@members[0].e_mail).to eql('test@gmail.com')
      end
    end

  end
end
