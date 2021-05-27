class AddRegcodeToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :regcode, :string
  end
end
