class Player < ApplicationRecord
  has_many :team_players
  has_many :players, through: :team_players

  validates :first_name, :presence => true, :allow_blank => false
  validates :last_name, :presence => true, :allow_blank => false
  validates :position, :presence => true, :allow_blank => false
  validates :nfl_team, :presence => true, :allow_blank => false

  def player_info
    "#{first_name} #{last_name},  #{position}, #{nfl_team}"
  end

end
