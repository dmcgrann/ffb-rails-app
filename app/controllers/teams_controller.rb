class TeamsController < ApplicationController
  include SessionsHelper

  def index
    if params[:user_id]
      @user= User.find(params[:user_id])
      @teams = @user.teams
    else
      redirect_to root_path
    end
  end

  def new
    if params[:user_id]  && !User.exists?(params[:user_id])
      redirect_to root_path, alert: "User not found."
    else
      @team = Team.new(user_id: params[:user_id])
    end
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
    if params[:user_id]
      user = User.find_by(id: params[:user_id])
      @team = user.teams.find_by(id: params[:id])
      redirect_to user_teams_path(user), alert: "Team not found" if @team.nil?
    else
      redirect_to 'root_path'
    end
  end

  def update
    @team = Team.find(params[:id])
    @team.update(team_params)
    redirect_to user_team_path(@team)
  end

  def destroy
    if @team = Team.find(params[:id])
      @team.destroy
      redirect_to user_path
    else
      flash[:alert] = "You cannot delete other people's teams!"
      redirect_to root_path
    end
  end


  private

  def team_params
    params.require(:team).permit(:team_name, :league_id, :user_id, player_ids:[], players_attributes: [:player_name, :position, :nfl_team] )
  end


end
