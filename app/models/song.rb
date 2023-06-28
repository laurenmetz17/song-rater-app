class Song < ApplicationRecord
    has_many :ratings 
    has_many :listeners, through: :ratings
end
