class Organization < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :image, ImageUploader
  has_many :events, dependent: :destroy
  has_many :posts, dependent: :destroy

  has_many :subscriptions, foreign_key: :organization_id, class_name: 'Subscription'
  has_many :subscribers, through: :subscriptions

end
