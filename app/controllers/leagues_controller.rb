class LeaguesController < ApplicationController
  include SessionsHelper

  def index
    @leagues = League.all
  end

  def new
    @league = League.new
  end

  def create
    if current_user.admin && logged_in?
      @league = League.create(league_params)
        if @league.valid?
          redirect_to league_path(@league)
        else
          render 'new'
        end
    else
      flash[:alert] = "No, no, no... only admins can create leagues."
      redirect_to leagues_path
    end
  end

  def show
    @league = League.find(params[:id])
  end

  def edit
    @league = League.find(params[:id])
  end

  def update
    if current_user.admin && logged_in?
      @league = League.find(params[:id])
      @league.update(league_params)
      redirect_to league_path(@league)
    else
      redirect_to leagues_path
    end
  end

  def destroy
    if current_user.admin && logged_in?
      @league = League.find(params[:id])
      @league.destroy
      flash[:alert] = "Deleted!"
      redirect_to root_path
    else
      flash[:alert] = "No, no, no... only admins can create leagues."
      redirect_to leagues_path
    end
  end

  private

  def league_params
    params.require(:league).permit(:name, :scoring_style, :draft_style)
  end

end
