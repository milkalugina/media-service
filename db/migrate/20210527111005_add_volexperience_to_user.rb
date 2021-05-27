class AddVolexperienceToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :volexperience, :string
  end
end
