class AddRegistrationdocToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :registrationdoc, :string
  end
end
