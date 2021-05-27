class AddOrgnameToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :orgname, :string
  end
end
