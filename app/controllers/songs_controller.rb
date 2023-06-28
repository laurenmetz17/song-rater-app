class SongsController < ApplicationController
    #consider adding rescue from at top  for active record not found 
    def index
        songs = Song.all
        render json: songs, include: :ratings 
    end

    def show
        song = Song.fing(params[:id])
        render json: song, include: :ratings
    end

    def destroy 
        #add dependent destroy 
        song = find(params[:id])
        song.destroy
        head :no_content
    end

    def create
        #create from a listener that is an artist
    end

    private

    def song_params
        params.permit(:title, :duration, :art)
    end 
end
