class LeaguesController < ApplicationController

  def index
    @leagues = League.all
  end

  def new
    @league = League.new
  end

  def create
    @league = League.create(league_params)
    if @league.valid?
      redirect_to league_path(@league)
    else
      render 'new'
    end
  end

  def show
    @league = League.find(params[:id])
  end

  private

  def league_params
    params.require(:league).permit(:name, :scoring_style, :draft_style)
  end

end
