# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140408151643) do

  create_table "album_groups", force: true do |t|
    t.integer  "album_id"
    t.integer  "group_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "albums", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "top_img_path",       default: "no_image.jpg", null: false
    t.integer  "album_photos_count", default: 0,              null: false
    t.integer  "group_id"
  end

  add_index "albums", ["group_id"], name: "index_albums_on_group_id"
  add_index "albums", ["user_id"], name: "index_albums_on_user_id"

  create_table "auth_providers", force: true do |t|
    t.integer  "user_id"
    t.string   "provider",    null: false
    t.string   "uid",         null: false
    t.string   "screen_name"
    t.string   "image_path"
    t.string   "token"
    t.string   "secret"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "events", force: true do |t|
    t.string   "title"
    t.datetime "start"
    t.datetime "end"
    t.string   "color"
    t.boolean  "allDay"
    t.integer  "user_id"
    t.integer  "album_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "geo_maps", force: true do |t|
    t.string   "name",       null: false
    t.decimal  "latitude",   null: false
    t.decimal  "longitude",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "group_members", force: true do |t|
    t.string  "e_mail",                      null: false
    t.integer "group_id"
    t.boolean "invite_flag", default: false, null: false
    t.string  "token"
  end

  add_index "group_members", ["token"], name: "index_group_members_on_token", unique: true

  create_table "groups", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "photo_comments", force: true do |t|
    t.string   "message"
    t.integer  "user_id"
    t.integer  "photo_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "photos", force: true do |t|
    t.string   "title",              null: false
    t.integer  "user_id",            null: false
    t.text     "description"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "album_id"
  end

  add_index "photos", ["album_id"], name: "index_photos_on_album_id"
  add_index "photos", ["user_id", "created_at"], name: "index_photos_on_user_id_and_created_at"

  create_table "user_groups", force: true do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email"
  end

  create_table "videos", force: true do |t|
    t.string   "title"
    t.string   "panda_video_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "visits", force: true do |t|
    t.string   "visit_token"
    t.string   "visitor_token"
    t.string   "ip"
    t.text     "user_agent"
    t.text     "referrer"
    t.text     "landing_page"
    t.integer  "user_id"
    t.string   "user_type"
    t.string   "referring_domain"
    t.string   "search_keyword"
    t.string   "browser"
    t.string   "os"
    t.string   "device_type"
    t.string   "country"
    t.string   "region"
    t.string   "city"
    t.string   "utm_source"
    t.string   "utm_medium"
    t.string   "utm_term"
    t.string   "utm_content"
    t.string   "utm_campaign"
    t.datetime "created_at"
  end

  add_index "visits", ["user_id", "user_type"], name: "index_visits_on_user_id_and_user_type"
  add_index "visits", ["visit_token"], name: "index_visits_on_visit_token", unique: true

end
