class RequestsController < ApplicationController
  before_action :find_event
  before_action :find_request, only: [:destroy]

  def create
   if already_requested?
     flash[:notice] = "Вы не можете подать заявку дважды"
   else
    @event.requests.create(user_id: current_user.id)
   end
    redirect_to event_path(@event)
  end

  def destroy
    if !(already_requested?)
      flash[:notice] = "Нельзя анлайк"
    else
      @request.destroy
    end
    redirect_to event_path(@event)
  end

  private
  def already_requested?
    Request.where(user_id: current_user.id, event_id:
      params[:event_id]).exists?
    end

  def find_event
      @event = Event.find(params[:event_id])
  end

  def find_request
    @request = @event.requests.find(params[:id])
  end

end
