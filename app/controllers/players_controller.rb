class PlayersController < ApplicationController

  def index
    @players = Player.search(params[:search])
  end

  private

  def player_params
    params.require(:player).permit(:player_name, :position, :nfl_team)
  end

end
