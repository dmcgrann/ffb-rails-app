class Player < ApplicationRecord
  has_many :team_players
  has_many :teams, through: :team_players

  validates :player_name, :presence => true, :allow_blank => false
  validates :position, :presence => true, :allow_blank => false
  validates :nfl_team, :presence => true, :allow_blank => false
  

  scope :list, -> { order(nfl_team: :asc) }
  scope :qb, -> { where(position: "QB")}
  scope :rb, -> { where(position: "RB")}
  scope :wr, -> { where(position: "WR")}
  scope :te, -> { where(position: "TE")}

  TEAMS = ["ARZ", "ATL", "BAL", "BUF", "CAR", "CHI", "CIN", "CLE", "DAL", "DEN", "DET", "GB", "HOU", "IND", "JAX", "KC", "LAC", "LAR", "MIA", "MIN", "NE", "NYG", "NYJ", "OAK", "PHI", "PIT", "SF", "SEA", "TB", "TEN", "WAS"]

  POSITIONS = ["QB", "RB", "WR", "TE"]

  def player_info
    "#{player_name}, #{position}, #{nfl_team}"
  end

end
