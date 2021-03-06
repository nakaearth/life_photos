class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :name
      t.string :screen_name
      t.string :image_path
      t.string :token
      t.string :secret
      t.timestamps
    end
  end
end
