class AddVkToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :vk, :string
  end
end
