json.array!(@albums) do |album|
  json.extract!(album, :id, :title)
  json.photos  album.photos, :id, :title
end
