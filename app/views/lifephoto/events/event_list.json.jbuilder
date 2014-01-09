json.array!(@events) do |event|
  json.extract! event, :title, :start, :end, :color, :allDay
  json.url event_url(event, format: :json)
end
