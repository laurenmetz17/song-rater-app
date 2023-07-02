class RemoveDurationFromSong < ActiveRecord::Migration[6.1]
  def change
    remove_column :songs, :duration
  end
end
