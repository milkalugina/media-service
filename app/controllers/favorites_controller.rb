class FavoritesController < ApplicationController
 before_action :find_event
 before_action :find_favorite, only: [:destroy]

 def create
   if already_favorited?
     flash[:notice] = "You can't add to favorite more than once"
   else
     @event.favorites.create(user_id: current_user.id)
   end
   redirect_to event_path(@event)
 end
 def destroy
   if !(already_favorited?)
     flash[:notice] = "Cannot unfavorite"
   else
     @favorite.destroy
   end
   redirect_to event_path(@event)
 end
 private
 def already_favorited?
   Favorite.where(user_id: current_user.id, event_id:
   params[:event_id]).exists?
 end
 def find_event
   @event = Event.find(params[:event_id])
 end
 def find_favorite
    @favorite = @event.favorites.find(params[:id])
 end
end
