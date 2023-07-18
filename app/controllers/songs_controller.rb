class SongsController < ApplicationController

    skip_before_action :authorize, only: [:index]
    
    def index
        songs = Song.all
        render json: songs
    end

    def show
        song = Song.find(params[:id])
        render json: song
    end

    def destroy 
        song = find(params[:id])
        song.destroy
        head :no_content
    end

    def create
        song = Song.create(song_params)
        if song.valid?
            render json: song, status: :created
        else
            render json: {errors: song.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def song_params
        params.permit(:title, :artist)
    end 
end
