class ArticlesController < ApplicationController
  before_action :ensure_logged_in
  


  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = @current_user.id
    puts @article.inspect, 'resultant article'
    if @article.save
      render status: :ok, json:{notice:"Article created successfully"}
    else
      error_message = @article.errors.full_messages
      render status: :unprocessable_entity, json:{errors: error_message}
    end
  end

  def update
    if @article.update(article_params)
      render status: :ok, json:{notice:"Article updated successfully"}
    else
      error_message = @article.error.full_messages
      render status: :unprocessable_entity, json:{errors: error_message}
    end
  end

  private 
    def article_params
      params.require(:article).permit(:title, :content)
    end


end