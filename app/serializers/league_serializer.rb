class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :scoring, :draft
end
