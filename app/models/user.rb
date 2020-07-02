class User < ApplicationRecord
  before_save { self.email = email.downcase }
  validates :name, presence:true, length:{maximum:50}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence:true, length:{maximum: 225}, uniqueness: true, format:{ with: VALID_EMAIL_REGEX }
  validates :password ,length:{ minimum:5 }, presence:true

  has_secure_password
end
