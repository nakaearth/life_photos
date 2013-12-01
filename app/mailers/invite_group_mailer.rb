class InviteGroupMailer < ActionMailer::Base
  default from: "life_photo@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.invite_group_mailer.send_invite_mail.subject
  #
  def send_invite_mail(to_mail, album_id)
    @greeting = "Hi"
    @group_join_url = "/albums/#{album_id}"
     
    mail to: to_mail ,subject: "Invite life_photo group."
  end

  def send_notice_photo_mail
    @check_photo_url = "http://hogehoge.com/"
  end

end
