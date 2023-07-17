class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize
  skip_before_action :authorize, only: [:index]

  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :listener_id
  end


  #if authorized in session then allow controllers 
  #authorizing requests

end
