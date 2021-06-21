class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @events = Event.where(nil)
  filtering_params(params).each do |key, value|
    @events = @events.public_send("filter_by_#{key}", value) if value.present?

  end

    # @events = Event.where(nil)
    # @events = @events.filter_by_sphere(params[:sphere]) if params[:sphere].present?
    # @events = @events.filter_by_skill(params[:skill]) if params[:skill].present?
    # @events = @events.filter_by_type(params[:type]) if params[:type].present?
    # if params.has_key?(:sphere)
    #   @sphere = Sphere.find_by_name(params[:sphere])
    #   @events = Event.where(sphere: @sphere)
    # else
    #   @events = Event.all
    # end
    # if params.has_key?(:skill)
    #   @skill = Skill.find_by_name(params[:skill])
    #   @events = Event.where(skill: @skill)
    # else
    #   @events = Event.all
    # end
    # if params.has_key?(:type)
    #   @type = Type.find_by_name(params[:type])
    #   @events = Event.where(type: @type)
    # else
    #   @events = Event.all
    # end
end




  # GET /events/1
  # GET /events/1.json
  def show
    @event = Event.find(params[:id])
    @events = Event.all
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    @event = Event.new(event_params.merge(organization_id: current_organization.id))

    respond_to do |format|
      if @event.save
        format.html { redirect_to @event, notice: 'Event was successfully created.' }
        format.json { render :show, status: :created, location: @event }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def filtering_params(params)
      params.slice(:sphere, :type, :skill)
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def event_params
      params.require(:event).permit(:title, :name, :duration, :description, :details, :plan, :organizer, :image, :sphere_id, :skill_id, :type_id)
    end
end
