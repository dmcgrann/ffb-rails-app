class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.create(team_params)
    if @team.valid?
      redirect_to team_path(@team)
    else
      render 'new'
    end
  end

  def show
    @team = Team.find(params[:id])
  end

  def edit
    @team = Team.find(params[:id])
  end

  def update
    @team = Team.find(params[:id])
    @team.update(team_params)
    redirect_to team_path(@team)
  end

  private

  def team_params
    params.require(:team).permit(:name, :league_id, :user_id, player_ids:[], players_attributes: [:first_name, :last_name, :position, :nfl_team] )
  end


end
