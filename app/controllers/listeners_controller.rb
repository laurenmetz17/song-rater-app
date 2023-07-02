class ListenersController < ApplicationController
    def index
        listeners = Listener.all 
        render json: listeners, include: [:ratings, :songs]
    end

    def show 
        listener = Listener.find(params[:id])
        render json: listener, include: [:ratings, :songs]
    end

    def destroy 
        #add dependent destroy
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
        params.permit(:name, :username, :password, :password_confirmation, :proifle_pic)
    end
end
