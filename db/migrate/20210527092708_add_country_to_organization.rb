class AddCountryToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :country, :string
  end
end
