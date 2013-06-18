class MainController < ApplicationController
  
  def index
    @blog = Blog.last
  end
  
end
