class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :song_id
      t.integer :listener_id
      t.integer :review
      t.string :comment

      t.timestamps
    end
  end
end
