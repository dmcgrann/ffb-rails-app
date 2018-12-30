class User < ApplicationRecord
  has_secure_password
  has_many :teams, :dependent => :destroy
  has_many :leagues, through: :teams

  validates :name, :presence => true, :allow_blank => false
  validates :name, :uniqueness => true

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.name = auth.info.name
      user.password = SecureRandom.hex
      user.save
    end
  end

end
