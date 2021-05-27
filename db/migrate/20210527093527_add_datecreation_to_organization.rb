class AddDatecreationToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :datecreation, :string
  end
end
