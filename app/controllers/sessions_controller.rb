class SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def create
        listener = Listener.find_by(username: params[:username])
        if listener&.authenticate(params[:password])
                session[:listener_id] = listener.id
                render json: listener, status: :created
        else 
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :listener_id
        head :no_content
    end
end
