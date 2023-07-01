class RemoveArtistFromListener < ActiveRecord::Migration[6.1]
  def change
    remove_column :listeners, :artist
  end
end
