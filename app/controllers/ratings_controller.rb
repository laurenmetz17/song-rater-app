class RatingsController < ApplicationController
    def create
        song = Song.find(params[:song_id])
        rating = song.ratings.create(rating_params)
        if rating.valid?
            render json: rating, status: :created
        else
            render json: {errors: rating.errors.full_messages}
        end
    end

    def destroy
        rating = Rating.find(params[:id])
        rating.destroy
        head :no_content
    end

    private

    def rating_params
        params.permit(:song_id, :listener_id, :review, :comment)
    end
end
