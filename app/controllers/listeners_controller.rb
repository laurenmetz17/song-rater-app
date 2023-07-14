class ListenersController < ApplicationController
    def index
        listeners = Listener.all 
        render json: listeners
    end

    def show 
        listener = Listener.find_by(id: session[:listener_id])
        if listener
            render json: listener
        else
            render json: {error:"unathorized"}, status: :unathorized
        end
    end

    def destroy 
        listener = Listener.find(params[:id])
        listner.destroy
        head :no_content
    end
    
    def create
        listener = Listener.create(listener_params)
        if listener.valid?
            render json: listener, status: :created
        else
            render json: {errors: listener.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def listener_params
        params.permit(:name, :username, :password, :password_confirmation)
    end
end
