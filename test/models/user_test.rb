require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(name:"a1", email:"ayush@gmail.com", password:'qwerty', password_confirmation:"qwerty")
  end
  
  
  test "checking password working" do
    @user.password = @user.password_confirmation = ""
    assert_not @user.valid?
  end
end
