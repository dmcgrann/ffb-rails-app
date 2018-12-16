class Player < ApplicationRecord
  has_many :team_players
  has_many :players, through: :team_players

  validates :player_name, :presence => true, :allow_blank => false
  validates :position, :presence => true, :allow_blank => false
  validates :nfl_team, :presence => true, :allow_blank => false

  def player_info
    "#{player_name} #{position}, #{nfl_team}"
  end

  def self.search(position)
    if position
      where('name LIKE ?', "%#{position}%")
    else
      all
    end
  end

end
