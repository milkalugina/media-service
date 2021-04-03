class UserRegStepsController < ApplicationController
  include Wicked::Wizard
  steps :general, :fill_form, :personal, :interests, :social, :ending

  def show
    render_wizard
  end
end
