class OrgRegStepsController < ApplicationController
  include Wicked::Wizard
  steps :organization, :roles, :mission, :documents, :ending

  def show
    render_wizard
  end
end
