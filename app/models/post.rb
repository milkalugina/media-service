class Post < ApplicationRecord
    scope :filter_by_category, -> (category) { where category: category }

		validates :title, :presence => true,
											:length => { :minimum => 5 }
<<<<<<< Updated upstream
		belongs_to :organization
=======
    belongs_to :organization
>>>>>>> Stashed changes
		belongs_to :category
		mount_uploader :image, ImageUploader
end
