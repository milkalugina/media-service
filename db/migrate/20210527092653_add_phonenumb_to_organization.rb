class AddPhonenumbToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :phonenumb, :string
  end
end
