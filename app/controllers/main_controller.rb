class MainController < ApplicationController
  def index
		render :json => {message: "Hello World! I am from Rails Planet"}.as_json
  end
end
