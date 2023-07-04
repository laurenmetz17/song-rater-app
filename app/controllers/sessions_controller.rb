class SessionsController < ApplicationController

    def create
        listener = Listener.find_by(username: params[:username])
        # add password authenticate
        if listener
            session[:listener_id] = listener.id
            render json: listener, include: [:ratings, :songs]
        else 
            render json: {errors: listener.errors.full_messages}
        end
    end

    def destroy
        session.delete :listener_id
        head :no_content
    end
end
