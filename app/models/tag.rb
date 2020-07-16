class Tag < ApplicationRecord
  has_many :taggings
  has_many :articles, through: :taggings
  # belongs_to :articles, optional:true

  
end
