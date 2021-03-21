class Event < ApplicationRecord
  belongs_to :sphere
  belongs_to :skill
  belongs_to :type
end
