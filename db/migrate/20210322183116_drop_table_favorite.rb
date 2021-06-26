class DropTableFavorite < ActiveRecord::Migration[6.0]
  def change
    drop_table(:favorites, if_exists: true)
  end
end
