class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :duration
      t.string :description
      t.text :details
      t.text :plan
      t.text :organizer
      t.string :image

      t.timestamps
    end
  end
end
