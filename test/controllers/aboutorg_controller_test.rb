require 'test_helper'

class AboutorgControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get aboutorg_index_url
    assert_response :success
  end

end
