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
      flash[:alert] = "User not found."
      redirect_to root_path
    else
      @team = Team.new(user_id: params[:user_id])
    end
  end

  def create
    @team = Team.new(team_params)
    if @team.valid? && (current_user.id == @team.user_id || current_user.admin)
      @team.save
      flash[:success] = "New team created."
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
    else
      flash[:alert] = "Action not permitted."
      redirect_to root_path
    end
  end

  def update
    @team = Team.find(params[:id])
    if current_user.id == @team.user_id || current_user.admin
      @team.update(team_params)
      if @team.valid?
        redirect_to user_team_path(@team)
      else
        render 'edit'
      end
    else
      flash[:alert] = "Action not permitted."
      redirect_to root_path
    end
  end

  def destroy
    if current_user && logged_in?
      @team = Team.find(params[:id])
      @team.destroy
      flash[:alert] = "Team deleted."
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
