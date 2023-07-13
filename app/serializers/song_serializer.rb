class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist

  has_many :ratings
end
