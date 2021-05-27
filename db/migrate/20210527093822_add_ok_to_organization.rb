class AddOkToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :ok, :string
  end
end
