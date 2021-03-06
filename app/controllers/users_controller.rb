class UsersController < ApplicationController

 def new
  @users = User.new
 end

 def create
   @users = User.new(params[:user])
   if @user.save
     session[:user_id] = @user.id
     redirect_to user_reg_steps_path
   else
     render :new
   end
 end

  def index
    @users = User.all
  end


  def show
    @user = User.find(params[:id])

    if params.has_key?(:category)
      @category = Category.find_by_name(params[:category])
      @posts = Post.where(category: @category)
    else
      @posts = Post.all
    end
    if @user
      @events = @user.favorited_events
      render actions: :show
      @favorites = @user.favorites.all
    else
        render file: 'public/404', status: 404, formats: [:html]
    end
  end


    def subscribing
    end

  def favorited?(event)
    favorites.find_by(event_id: event.id).present?
  end

  def requested?(event)
    requests.find_by(event_id: event.id).present?
  end


  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end

end
