class Subscription < ApplicationRecord
  belongs_to :user_id, class_name: 'User'
  belongs_to :organization_id, class_name: 'Organization'
end
