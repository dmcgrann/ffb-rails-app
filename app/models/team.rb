class Team < ApplicationRecord
  belongs_to :user
  belongs_to :league
  has_many :team_players
  has_many :players, through: :team_players

  accepts_nested_attributes_for :players

  validates :team_name, :presence => true, :allow_blank => false
  validates :team_name, :uniqueness => true
  validates :team_name, :length => {:maximum => 30, :message => "30 character max."}
  validate :max_players

  def max_players
    if team_player_ids.count > 10
      errors.add(:team, "cannot have more than 10 players.")
    end
  end

  def players_attributes=(player_attributes)
    player_attributes.values.each do |player_attribute|
      player = Player.find_or_create_by(player_attribute)
      self.players << player
    end
  end
end
