class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :scoring_style, :draft_style
end
