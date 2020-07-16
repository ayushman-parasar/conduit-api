class SessionsController < ApplicationController
  
  def new
  end

  def create
    puts params[:password], "checking params object in sessions controller"
    user = User.find_by(email: params[:email])
    if user.authenticate(params[:password])
      session[:user_id] = user.id.to_s
      render status: :ok, json:{notice: "Successfully Logged in! "}     
    else
      render status: :not_found, json: { errors: "Incorrect credentials, try again later"}
    end
  end

  def index
    # @currentUser = current_user
    render json: {currentUser: current_user}
  end
end
