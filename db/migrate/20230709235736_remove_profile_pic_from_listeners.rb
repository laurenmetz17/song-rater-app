class RemoveProfilePicFromListeners < ActiveRecord::Migration[6.1]
  def change
      remove_column :listeners, :profile_pic
  end
end
