class CreateAuthProviders < ActiveRecord::Migration
  def change
    create_table :auth_providers do |t|
      t.integer :user_id
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :screen_name
      t.string :image_path
      t.string :token
      t.string :secret

      t.timestamps
    end
    remove_column :users, :provider
    remove_column :users, :uid
    remove_column :users, :screen_name
    remove_column :users, :image_path
    remove_column :users, :token
    remove_column :users, :secret
  end
end
