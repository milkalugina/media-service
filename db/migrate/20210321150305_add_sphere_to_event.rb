class AddSphereToEvent < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :sphere, null: false, foreign_key: true
  end
end
