class CreateEvents < ActiveRecord::Migration
  def change
#    drop_table :events
    create_table :events do |t|
      t.string :title
      t.datetime :start
      t.datetime :end
      t.string :color
      t.boolean :allDay
      t.integer :user_id
      t.integer :album_id

      t.timestamps
    end
  end
end
