class OrganizationsController < ApplicationController
  def index
    @organizations = Organization.all
  end

  def show
    @organization = Organization.find(params[:id])
  end

  def destroy
    @organization = Organization.find(params[:id])
    @organization.destroy
    redirect_to organizations_path, notice: 'Organization deleted.'
  end
end
