class AddMissionToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :mission, :text
  end
end
