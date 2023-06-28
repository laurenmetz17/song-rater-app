class Listener < ApplicationRecord
    validates :name, {presence: true}
    validates :artist, {presence: true}
    validates :username, {presence: true}
    #validate password?

    has_secure_password

    has_many :ratings
    has_many :songs, through: :ratings 
end
