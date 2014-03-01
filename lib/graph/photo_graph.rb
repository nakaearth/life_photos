module Graph
  class PhotoGraph

    def create_relation(album)
      @neo = Neography::Rest.new
      @neo.set_node_properties(node1, {"weight" => 200})
      album.phtos.each do |photo| 
        node = @neo.create_node(user_id: photo.user_id, photo_title: photo.title, photo_user_id: photo.id, image_url: photo.photo.url(:thum))
        @neo.create_relationship(album_name, node, pre_node) if pre_node
        pre_node = node
      end

    end

    def photo_graph
      @neo = Neography::Rest.new
      graph_exists = neo.get_node_properties(1)
      return if graph_exists && graph_exists['name']
    end

  end
end
