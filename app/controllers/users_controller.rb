class UsersController < ApplicationController
  def new
    @user = User.new
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

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
