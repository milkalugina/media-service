class AddTypeToEvent < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :type, null: false, foreign_key: true
  end
end
