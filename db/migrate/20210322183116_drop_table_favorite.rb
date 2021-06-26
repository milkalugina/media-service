class DropTableFavorite < ActiveRecord::Migration[6.0]
  def change
    drop_table :favorites if table_exists?(:favorites)
  end
end
