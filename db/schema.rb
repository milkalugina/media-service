# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_15_165903) do

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "display_in_navbar", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ckeditor_assets", force: :cascade do |t|
    t.string "data_file_name", null: false
    t.string "data_content_type"
    t.integer "data_file_size"
    t.string "type", limit: 30
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["type"], name: "index_ckeditor_assets_on_type"
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "duration"
    t.string "description"
    t.text "details"
    t.text "plan"
    t.text "organizer"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sphere_id", null: false
    t.integer "skill_id", null: false
    t.integer "type_id", null: false
    t.string "name"
    t.index ["skill_id"], name: "index_events_on_skill_id"
    t.index ["sphere_id"], name: "index_events_on_sphere_id"
    t.index ["type_id"], name: "index_events_on_type_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "event_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_favorites_on_event_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followee_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "organizations", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "firstname"
    t.string "lastname"
    t.string "middlename"
    t.string "phonenumb"
    t.string "country"
    t.string "city"
    t.string "type"
    t.string "datecreation"
    t.string "phonenumber"
    t.string "website"
    t.string "vk"
    t.string "facebook"
    t.string "instagram"
    t.string "youtube"
    t.string "ok"
    t.text "mission"
    t.string "role"
    t.string "registrationdo"
    t.string "foundersdoc"
    t.string "nonprofdoc"
    t.string "orgtype"
    t.string "orgname"
    t.string "registrationdoc"
    t.index ["email"], name: "index_organizations_on_email", unique: true
    t.index ["reset_password_token"], name: "index_organizations_on_reset_password_token", unique: true
  end

  create_table "posts", force: :cascade do |t|
    t.string "name"
    t.string "title"
    t.text "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.string "date"
    t.integer "user_id", null: false
    t.integer "category_id", null: false
    t.index ["category_id"], name: "index_posts_on_category_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "spheres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "subscribers", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.boolean "isadmin", default: false
    t.boolean "isorganization", default: false
    t.boolean "ismoderator", default: false
    t.string "phonenumber"
    t.string "regcode"
    t.string "firstname"
    t.string "lastname"
    t.string "country"
    t.string "city"
    t.string "volinterests"
    t.string "volexperience"
    t.string "education"
    t.string "interests"
    t.string "vk"
    t.string "facebook"
    t.string "instagram"
    t.string "emptype"
    t.string "workplace"
    t.string "position"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "events", "skills"
  add_foreign_key "events", "spheres"
  add_foreign_key "events", "types"
  add_foreign_key "favorites", "events"
  add_foreign_key "favorites", "users"
  add_foreign_key "posts", "categories"
  add_foreign_key "posts", "users"
end
