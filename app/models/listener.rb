class Listener < ApplicationRecord
    has_many :ratings
    has_many :songs, through: :ratings 
end
