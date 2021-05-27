class Event < ApplicationRecord
  scope :filter_by_sphere, -> (sphere) { where sphere: sphere }
  scope :filter_by_skill, -> (skill) { where skill: skill }
  scope :filter_by_type, -> (type) { where type: type }
  
  belongs_to :sphere
  belongs_to :skill
  belongs_to :type

  has_many :favorites, dependent: :destroy
end
