class Player < ApplicationRecord
  has_many :team_players
  has_many :players, through: :team_players

  validates :player_name, :presence => true, :allow_blank => false
  validates :position, :presence => true, :allow_blank => false
  validates :nfl_team, :presence => true, :allow_blank => false

  scope :list, -> { order(nfl_team: :asc) }
  scope :qb, -> { where(position: "QB")}
  scope :rb, -> { where(position: "RB")}
  scope :wr, -> { where(position: "WR")}
  scope :te, -> { where(position: "TE")}

  def player_info
    "#{player_name} #{position}, #{nfl_team}"
  end

end
