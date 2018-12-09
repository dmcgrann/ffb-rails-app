class League < ApplicationRecord
  has_many :teams
  has_many :users, through: :teams

  validates :name, :presence => true, :allow_blank => false
  validates :name, :uniqueness => true
  validates :name, :length => {:maximum => 100, :message => "100 character max."}


end
