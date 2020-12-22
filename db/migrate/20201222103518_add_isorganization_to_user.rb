class AddIsorganizationToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :isorganization, :boolean, :default => false
  end
end
