json.array!(@photos) do |photo|
  json.extract!(photo, :id, :title)
end
