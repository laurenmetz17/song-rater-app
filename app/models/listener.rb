class Listener < ApplicationRecord
    validates :name, {presence: true}
    validates :artist, {presence: true}
    
    has_many :ratings
    has_many :songs, through: :ratings 
end
