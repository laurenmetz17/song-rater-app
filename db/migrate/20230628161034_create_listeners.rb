class CreateListeners < ActiveRecord::Migration[6.1]
  def change
    create_table :listeners do |t|
      t.string :name
      t.string :profile_pic
      t.boolean :artist

      t.timestamps
    end
  end
end
