class Team < ApplicationRecord
  belongs_to :user
  belongs_to :league

  validates :name, :presence => true, :allow_blank => false
  validates :name, :uniqueness => true
  validates :name, :length => {:maximum => 30, :message => "30 character max."}


end
