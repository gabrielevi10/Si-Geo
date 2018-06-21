class MapsController < ApplicationController

  def index
    @shapes = Shape.all
  end
  
end
