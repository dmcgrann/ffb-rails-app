class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :teams
  belongs_to :league, serializer: UserLeagueSerializer
end
