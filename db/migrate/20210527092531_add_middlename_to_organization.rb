class AddMiddlenameToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :middlename, :string
  end
end
