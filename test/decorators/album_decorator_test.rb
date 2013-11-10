# coding: utf-8
require 'test_helper'

class AlbumDecoratorTest < ActiveSupport::TestCase
  def setup
    @album = Album.new.extend AlbumDecorator
  end

  # test "the truth" do
  #   assert true
  # end
end
