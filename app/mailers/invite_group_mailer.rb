class InviteGroupMailer < ActionMailer::Base
  default from: "life_photo@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.invite_group_mailer.send_invite_mail.subject
  #
  def send_invite_mail
    @greeting = "Hi"
    @group_join_url = "http://hogehoge.com/"

    mail to: "to@example.org"
  end

  def send_notice_photo_mail
    @check_photo_url = "http://hogehoge.com/"
  end

end
