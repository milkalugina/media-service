class AddImageToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :image, :string
  end
end
