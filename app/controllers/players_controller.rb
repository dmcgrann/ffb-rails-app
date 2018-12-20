class PlayersController < ApplicationController
  include SessionsHelper

  def index
    @players = Player.all
  end

  def new
    @player = Player.new
  end

  def create
    if current_user.admin && logged_in?
      @player = Player.create(player_params)
      if @player.valid?
        redirect_to players_path
      else
        render 'new'
      end
    else
      render 'index'
    end
  end

  private

  def player_params
    params.require(:player).permit(:player_name, :position, :nfl_team)
  end

end
