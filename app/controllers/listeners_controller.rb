class ListenersController < ApplicationController
    def index
        listeners = Listener.all 
        render json: listeners 
    end
end
