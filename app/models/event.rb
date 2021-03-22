class Event < ApplicationRecord
  belongs_to :sphere
  belongs_to :skill
  belongs_to :type
  
  has_many :favorites, dependent: :destroy
end
