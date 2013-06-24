class MainController < ApplicationController
  
  def index
    @blog = Blog.last
  end
  
  def email_me
    name = params[:name]
    email = params[:email]
    content = params[:text]
    
    ContactMailer.first_contact(name, email, content).deliver
    
    head :ok
  end
  
end
