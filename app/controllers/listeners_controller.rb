class ListenersController < ApplicationController
    def index
        listeners = Listener.all 
        render json: listeners 
    end

    def show 
        listener = Listener.find(params[:id])
        render json: listener, indclude: :ratings
    end

    def destroy 
        #add dependent destroy
        listener = Listener.find(params[:id])
        listner.destroy
        head :no_content
    end
    
    def create
    end
end
