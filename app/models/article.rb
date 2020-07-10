class Article < ApplicationRecord
  belongs_to :user
  has_many :taggings
  has_many :tags, through: :taggings

  def all_tags(names)
    puts 'taglist'
    self.tags = names.split(',').map do |tag|
      Tag.where(content: tag).first_or_create!
    end 
  end

  
   
  
end
