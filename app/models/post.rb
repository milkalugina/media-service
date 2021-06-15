class Post < ApplicationRecord
    scope :filter_by_category, -> (category) { where category: category }

		validates :title, :presence => true,
											:length => { :minimum => 5 }
		belongs_to :user
		belongs_to :category
		mount_uploader :image, ImageUploader

end
