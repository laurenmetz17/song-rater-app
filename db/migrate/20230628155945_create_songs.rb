class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :art
      t.integer :duration

      t.timestamps
    end
  end
end
