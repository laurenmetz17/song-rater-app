class Listener < ApplicationRecord
    validates :name, {presence: true}
    #validates :username, {presence: true}
    #validates :password, {presence: true}
    #validates :password_confirmation, {presence: true}

    has_secure_password

    has_many :ratings
    has_many :songs, through: :ratings 
end
