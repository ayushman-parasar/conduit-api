class Article < ApplicationRecord
  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings

  # has_many :tags
  accepts_nested_attributes_for :tags
  

  # def all_tags(names)
  #   puts 'taglist'
  #   self.tags = names.split(',').map do |tag|
  #     Tag.where(content: tag).first_or_create!
  #   end 
  # end

  
   
  
end
