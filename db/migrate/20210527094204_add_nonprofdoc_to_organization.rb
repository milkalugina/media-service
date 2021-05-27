class AddNonprofdocToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :nonprofdoc, :string
  end
end
