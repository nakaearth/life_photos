class Api::ApplicationController < ActionController::Base
  rescue_from RuntimeError, with: :runtime_error
  rescue_from ActionController::RoutingError, ActiveRecord::RecordNotFound, with: :routing_error

  before_action :record_logs


  # [todo] ここに招待したユーザかどうかチェックするロジックをいれる
  def album_group_member?
    GroupMember.where(group_id: params[:group_id]).where(e_mail: params[:e_mail]).exists
  end

  def record_logs
    table_name = Rails.env.production? ? 'lifephoto' : 'dev_lifephoto'
    TD.event.post(table_name, {uid:  'unknown', action_date: Time.now.strftime("%Y%m%d") })
  end

  private
  def runtime_error
    logger.error "アプリケーションエラーが発生しました"
    render "/public/500.html", status:500
  end

  def routing_error
    logger.error "ルーティングエラーが発生しました"
    render "/public/404.html"
  end

end
