class AddRoleToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :role, :string
  end
end
