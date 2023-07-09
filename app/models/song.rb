class Song < ApplicationRecord
    validates :title, {presence: true}
    validates :artist, {presence: true}

    has_many :ratings, dependent: :destroy
    has_many :listeners, through: :ratings
end
