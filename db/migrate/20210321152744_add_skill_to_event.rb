class AddSkillToEvent < ActiveRecord::Migration[6.0]
  def change
    add_reference :events, :skill, null: false, foreign_key: true
  end
end
