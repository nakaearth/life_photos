# == Schema Information
#
# Table name: album_groups
#
#  id         :integer          not null, primary key
#  album_id   :integer
#  group_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

class AlbumGroup < ActiveRecord::Base
end
