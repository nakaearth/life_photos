class InviteGroupMailer < ActionMailer::Base
  default from: "life_photo@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.invite_group_mailer.send_invite_mail.subject
  #
  def send_invite_mail(group_member, album_id)
    @greeting = "Hi"
    @host_url =  Rails.env.production? ? "http://lifephoto.herokuapp.com" : "http://localhost:3000"
    @group_join_url = "/groups/#{group_member.group_id}/join_this_group?e_mail=#{group_member.e_mail}&token=#{group_member.token}"
     
    mail to: group_member.e_mail ,subject: "Invite life_photo group."
  end

  def send_notice_photo_mail
    @check_photo_url = Rails.env.production ? "http://lifephoto.herokuapp.com" : "http://localhost:3000"
  end

end
