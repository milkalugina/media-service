class OrganizationsController < ApplicationController
  def new
   @organizations = Organization.new
  end

  def create
    @organizations = Organization.new(params[:organization])
    if @organization.save
      session[:organization_id] = @organization.id
      redirect_to org_reg_steps_path
    else
      render :new
    end
  end

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
