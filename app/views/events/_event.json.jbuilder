json.extract! event, :id, :title, :duration, :description, :details, :plan, :organizer, :image, :created_at, :updated_at
json.url event_url(event, format: :json)
