class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :listener_id
  end

  def current_listener
    listener = Listener.find_by(id: session[:listener_id])
  end

end
