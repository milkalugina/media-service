class AddOrgtypeToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :orgtype, :string
  end
end
