class PromoController < ApplicationController
  def index
    @posts = Post.all
    @events = Event.all
  end

end
