class ArticlesController < ApplicationController
  before_action :ensure_logged_in , only: [:create, :show, :update]
  


  def index
    @articles = Article.all
    puts @articles.inspect, "all articles"
    render json: {articles: @articles}
  end

  def new
    @article = Article.new
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    puts params, "dasdaasd"
    @article = @current_user.articles.build(article_params)
    # @article = Article.new(article_params)
    # @article.user_id = @current_user.id
    # @article.all_tags(params[:taglist])
    puts @article.inspect, 'resultant article'
    if @article.save      
      render status: :ok, json:{notice:"Article created successfully",article:@article}
    else
      error_message = @article.errors.full_messages
      puts error_message, "error"
      render status: :unprocessable_entity, json:{errors: error_message}
    end
  end

  def user_feed()
    puts params, "checking in user_feed"
    @articles = Article.where(user_id: id)
    puts @article.inspect, "articles by the user"
    render json: {articles: @articles}
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
      # params.require(:article).permit(:title, :content, tags: [:content])
      params.require(:article).permit(:title, :content, tags_attributes: [:content])
    end

    

end
