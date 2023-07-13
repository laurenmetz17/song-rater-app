class ListenerSerializer < ActiveModel::Serializer
  attributes :id, :name, :username
  
  has_many :ratings
  has_many :songs
end
