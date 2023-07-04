class SessionsController < ApplicationController

    def create
        listener = Listener.find_by(username: params[:username])
        # add password authenticate
        if listener&.authenticate(params[:password])
                session[:listener_id] = listener.id
                render json: listener, include: [:ratings, :songs], status: :created
        else 
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :listener_id
        head :no_content
    end
end
