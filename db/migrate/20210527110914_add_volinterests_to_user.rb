class AddVolinterestsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :volinterests, :string
  end
end
