class Api::V1::UsersController < ApplicationController
  def new
    @user = User.new
  end
  def show
    @user = User.find(params[:id])
    render  json:{user:@user}
    # respond_to do |format|
    #   format.json {render json:{
    #     user:@user
    #   }}
      # format.html do 
      #   render 
      # end
    # end    
  end

  def create
    puts "inside create action of users controller"
    @user = User.new(user_params)
    puts @user.inspect, "inspecting user"
    if @user.save
      render status: :ok, json:{notice:"successfully created user"}     
    else
      error_message = @user.errors.full_messages
      render status: :unprocessable_entity, json:{errors: error_message}
    end
    puts @user, 'inside create action'
  end

  def show_feed
    @user = User.find(params[:user_id])
    @articles = @user.articles
    render json:{articles: @articles}
  end

  def update
    puts "update action "
    @user = User.find(params[:id])
    if @user.update(user_params)
      # flash[:success] = "User Updated"
      # redirect_to @user
      render status: :ok, json:{updatedUser: @user}
    else
      render status: :bad_request, json:{notice:"Update failed"}
    end
  end

  def destroy
    puts "destroy"
    @user = User.find(params[:id])
    if @user.destroy
      render status: :ok, json:{notice:"successfully logout user"} 
    else
      render status: :bad_request, json:{notice:"Logout unsuccessfull "} 
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
