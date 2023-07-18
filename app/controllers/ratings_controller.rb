
class RatingsController < ApplicationController

    def create
        song = Song.find(params[:song_id])
        rating = song.ratings.create(rating_params)
        if rating.valid?
            render json: rating, status: :created
        else
            render json: {errors: rating.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def index
        ratings = Rating.all
        render json: ratings
    end

    def update
        rating = current_listener.ratings.find_by(id: params[:id])
        rating.update(comment: params[:comment])
        render json: rating
    end

    def destroy
        rating = current_listener.ratings.find_by(id: params[:id])
        rating.destroy
        head :no_content
    end

    private

    def rating_params
        params.permit(:song_id, :listener_id, :review, :comment)
    end
end
