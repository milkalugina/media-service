class CreateSpheres < ActiveRecord::Migration[6.0]
  def change
    create_table :spheres do |t|
      t.string :name

      t.timestamps
    end
  end
end
