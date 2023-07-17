class RatingsController < ApplicationController
    before_action :authorize

    def create
        song = Song.find(params[:song_id])
        rating = song.ratings.create(rating_params)
        if rating.valid?
            render json: rating, status: :created
        else
            render json: {errors: rating.errors.full_messages}
        end
    end

    def index
        ratings = Rating.all
        render json: ratings
    end

    def update
        #current user.ratings.find
        rating = Rating.find(params[:id])
        rating.update(comment: params[:comment])
        render json: rating
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

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :listener_id
    end
end
