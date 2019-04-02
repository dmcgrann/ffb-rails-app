class PlayersController < ApplicationController
  include SessionsHelper

  def index
    @players = Player.all
    respond_to do |format|
      format.html
      format.json {render json: @players }
    end
  end

  def new
    @player = Player.new
  end

  def create
    if current_user.admin && logged_in?
      @player = Player.create(player_params)
      if @player.valid?
        redirect_to player_path(@player)
      else
        redirect_to players_path
      end
    else
      flash[:alert] = "Must be an admin to add a player."
      redirect_to players_path
    end
  end

  def show
    @player = Player.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @players }
    end
  end

  def edit
    @player = Player.find(params[:id])
  end

  def update
    if current_user.admin && logged_in?
      @player = Player.find(params[:id])
      @player.update(player_params)
      if @player.valid?
        redirect_to player_path(@player)
      else
        render 'edit'
      end
    else
      flash[:alert] = "Must be an admin to add a player."
      redirect_to players_path
    end
  end

  private

  def player_params
    params.require(:player).permit(:player_name, :position, :nfl_team)
  end

end
