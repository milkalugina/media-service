class AddFoundersdocToOrganization < ActiveRecord::Migration[6.0]
  def change
    add_column :organizations, :foundersdoc, :string
  end
end
