class TagsController < ApplicationController
  def index
    @tags = Tag.all
    puts @tags, 'alltags'
    render json: {tags:@tags}
  end
end
