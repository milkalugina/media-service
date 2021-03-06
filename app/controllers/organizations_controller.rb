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

  def volunteers_requests
  end

  def show
    @organization = Organization.find(params[:id])
  end

  def subscribe
    @organization = Organization.find(params[:id])
    current_user.organizations << @organization
    redirect_back(fallback_location: organization_path(@organization))
  end

  def unsubscribe
    @organization = Organization.find(params[:id])
    current_user.subscriptions.find_by(organization_id: @organization.id).destroy
    redirect_back(fallback_location: organization_path(@organization))
  end

  def subscribing
    @organization = Organization.find(params[:id])
    if @organization
      @subscribe = @user.subscriptions
      render actions: :show
      @subscribing = @user.users.all
    end
  end

  def following
  @user = User.find(params[:id])
  if @user
    @follow = @user.followed_users
    render actions: :show
    @following = @user.followees.all
  end
end

  #
  # def unsubscribe
  #   @user = User.find(params[:id])
  #   current_user.followed_users.find_by(followee_id: @user.id).destroy
  #   redirect_back(fallback_location: user_path(@user))
  # end

  def destroy
    @organization = Organization.find(params[:id])
    @organization.destroy
    redirect_to organizations_path, notice: 'Organization deleted.'
  end
end
