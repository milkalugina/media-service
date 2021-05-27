class AddVkToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :vk, :string
  end
end
