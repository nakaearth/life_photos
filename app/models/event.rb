# == Schema Information
#
# Table name: events
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  start      :datetime
#  end        :datetime
#  color      :string(255)
#  allDay     :boolean
#  user_id    :integer
#  album_id   :integer
#  created_at :datetime
#  updated_at :datetime
#

class Event < ActiveRecord::Base
end
