class AddPhonenumberToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :phonenumber, :string
  end
end
