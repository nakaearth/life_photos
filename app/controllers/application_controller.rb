class ApplicationController < ActionController::Base
  rescue_from RuntimeError, with: :runtime_error
  rescue_from ActionController::RoutingError, ActiveRecord::RecordNotFound, with: :routing_error
  #  rescue_from Toeicfive::ExaminationError, with: :examination_error

  before_action :iPhone?
  before_action :iPad?
  before_action :au?
  before_action :record_logs
  before_action :login?
  helper_method :current_user

  def current_user
    @current_user ||=  User.find(session[:user_id]) if session[:user_id]
  rescue ActiveRecord::RecordNotFound => ar
    logger.info "ユーザ情報がありません."
    session[:user_id] = nil
    redirect_to :root
  end

  # [todo] ここに招待したユーザかどうかチェックするロジックをいれる
  def album_group_member?
    GroupMember.where(group_id: params[:group_id]).where(e_mail: params[:e_mail]).exists
  end

  def record_logs
    table_name = Rails.env.production? ? 'lifephoto' : 'dev_lifephoto'
    TD.event.post(table_name, {uid: current_user.try(:id) || 'unknown', action_date: Time.now.strftime("%Y%m%d") ,controller_path: controller_path, action_name: action_name, response_time: response.headers["X-Runtime"] })
  end

  def login?
    if session[:user_id].blank?
      redirect_to :root
    end
  end

  def iPhone? 
    request.variant = :iphone if request.user_agent =~ /iPhone/
  end

  def iPad? 
    request.variant = :tablet if request.user_agent =~ /iPad/
  end
  
  def au?
    request.variant = :au if request.user_agent =~ /AU/
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

  #  def examination_error
  #    loger.error "試験データに問題が発生しました。"
  #    render "error/examination_error"
  #  end
end
