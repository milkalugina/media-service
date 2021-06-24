class Event < ApplicationRecord
  scope :filter_by_sphere, -> (sphere) { where sphere: sphere }
  scope :filter_by_skill, -> (skill) { where skill: skill }
  scope :filter_by_type, -> (type) { where type: type }

  belongs_to :organization
  belongs_to :sphere
  belongs_to :skill
  belongs_to :type

  has_many :favorites, dependent: :destroy
  has_many :requests, dependent: :destroy
  mount_uploader :image, ImageUploader, :presence => true

  validates :title, :presence => true
  validates :duration, :presence => true
  validates :description, :presence => true
  validates :plan, :presence => true
  validates :details, :presence => true
  validates :organizer, :presence => true
end
