class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :player_name, :position, :nfl_team
end
