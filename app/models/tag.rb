class Tag < ApplicationRecord
  # has_many :taggings
  # has_many :articles, through: :taggings
  belongs_to :articles

  # def to_s
  #   content
  # end
end
