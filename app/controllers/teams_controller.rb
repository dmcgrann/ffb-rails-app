class TeamsController < ApplicationController
  include SessionsHelper

  def index
    @teams = Team.all
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.create(team_params)
    if @team.valid?
      redirect_to user_path(current_user)
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

  def destroy
    Team.find(params[:id]).destroy
    flash[:alert] = "Team deleted."
    redirect_to root_path
  end


  private

  def team_params
    params.require(:team).permit(:name, :league_id, :user_id, player_ids:[], players_attributes: [:player_name, :position, :nfl_team] )
  end


end
