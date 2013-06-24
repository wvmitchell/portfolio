class UserSessionsController < ApplicationController
  
  def new
  end
  
  def create
    if login(params[:username], params[:password])
      redirect_back_or_to(users_path, notice: "Logged In")
    else
      render action: :new, notice: "Login Failed"
    end
  end
  
  def destroy
    logout
    redirect_to :main
  end
  
end
