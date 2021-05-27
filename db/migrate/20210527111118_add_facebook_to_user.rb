class AddFacebookToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :facebook, :string
  end
end
