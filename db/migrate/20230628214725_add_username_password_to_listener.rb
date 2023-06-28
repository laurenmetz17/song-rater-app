class AddUsernamePasswordToListener < ActiveRecord::Migration[6.1]
  def change
    add_column :listeners, :username, :string
    add_column :listeners, :password_digest, :string
  end
end
