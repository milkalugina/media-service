class AddFirstnameToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :firstname, :string
  end
end
