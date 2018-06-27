class MapsController < ApplicationController

  def index
    @shapes = Shape.all
    @newsletter = Newsletter.all
  end

end
