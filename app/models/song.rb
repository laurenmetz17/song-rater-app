class Song < ApplicationRecord
    validates :title, {presence: true}
    validates :artist, {presence: true}
    
    has_many :ratings 
    has_many :listeners, through: :ratings
end
