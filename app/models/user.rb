class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favorites, dependent: :destroy
  has_many :favorited_events, :through => :favorites, :source => :event
  has_many :requests, dependent: :destroy

  has_many :subscriptions, foreign_key: :user_id, class_name: 'Subscription'
  has_many :organizations, through: :subscriptions

  mount_uploader :image, ImageUploader
end
