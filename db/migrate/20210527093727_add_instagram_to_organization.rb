class AddInstagramToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :instagram, :string
  end
end
