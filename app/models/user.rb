class User < ApplicationRecord
  has_secure_password

  validates :name, :presence => true
  validates :name, :uniqueness => true


  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      # user.provider = auth.provider
      # user.id = auth.uid
      user.name = auth.info.name
      user.password = SecureRandom.hex
      user.save
      # user.oauth_token = auth.credentials.token
      # user.oauth_expires_at = Time.at(auth.credentials.expires_at)

    end
  end
end
