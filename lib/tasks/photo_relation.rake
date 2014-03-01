require 'graph/photo_graph'

namespace :photo_relation do

  desc "画像の関連を表します"

  task :create_graph => :environment do
    @graph = Graph::PhotoGrahp.new
    # ユーザ指定 emailを引数で渡す
    @user = User.find_by(email: "")
    @user.albums.each do |album|
      @graph.create_graph alumb
    end
  end
end
