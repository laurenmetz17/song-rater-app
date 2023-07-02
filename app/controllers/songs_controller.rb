class SongsController < ApplicationController
    #consider adding rescue from at top  for active record not found 
    def index
        songs = Song.all
        render json: songs, include: :ratings
    end

    def show
        song = Song.find(params[:id])
        render json: song, include: [:ratings, :listeners]
    end

    def destroy 
        #add dependent destroy 
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
