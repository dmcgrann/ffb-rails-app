class Team < ApplicationRecord
  belongs_to :user
  belongs_to :league
  has_many :team_players
  has_many :players, through: :team_players

  accepts_nested_attributes_for :players

  validates :name, :presence => true, :allow_blank => false
  validates :name, :uniqueness => true
  validates :name, :length => {:maximum => 30, :message => "30 character max."}

  def players_attributes=(player_attributes)
    player_attributes.values.each do |player_attribute|
      player = Player.find_or_create_by(player_attribute)
      self.players << player
    end
  end


end
