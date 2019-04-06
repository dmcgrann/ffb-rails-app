class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :player_name, :position, :nfl_team
  has_many :teams, serializer: TeamPlayerSerializer

end
