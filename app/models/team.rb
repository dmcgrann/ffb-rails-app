class Team < ApplicationRecord
  belongs_to :user
  belongs_to :league

  validates :team_name, :presence => true, :allow_blank => false
  validates :team_name, :uniqueness => true
  validates :team_name, :length => {:maximum => 30, :message => "30 character max."}


end
