require 'test_helper'

class InviteGroupMailerTest < ActionMailer::TestCase
  test "send_invite_mail" do
    mail = InviteGroupMailer.send_invite_mail
    assert_equal "Send invite mail", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
