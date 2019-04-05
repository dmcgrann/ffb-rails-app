class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :league, serializer: LeagueUserSerializer
end
