class PostPhotoMailer < ActionMailer::Base
  default from: "from@example.com"

    def send_notice_photo_mail(group_member, album_id)
      @greeting = "Hi"
      @host_url =  Rails.env.production? ? "http://lifephoto.herokuapp.com" : "http://localhost:3000"
      @group_join_url = "/albums/#{album_id}/guest_user_show"
 
     mail to: group_member.e_mail ,subject: "life_photo 写真投稿のお知らせ"
   end

end
