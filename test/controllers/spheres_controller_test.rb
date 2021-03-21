require 'test_helper'

class SpheresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sphere = spheres(:one)
  end

  test "should get index" do
    get spheres_url
    assert_response :success
  end

  test "should get new" do
    get new_sphere_url
    assert_response :success
  end

  test "should create sphere" do
    assert_difference('Sphere.count') do
      post spheres_url, params: { sphere: { name: @sphere.name } }
    end

    assert_redirected_to sphere_url(Sphere.last)
  end

  test "should show sphere" do
    get sphere_url(@sphere)
    assert_response :success
  end

  test "should get edit" do
    get edit_sphere_url(@sphere)
    assert_response :success
  end

  test "should update sphere" do
    patch sphere_url(@sphere), params: { sphere: { name: @sphere.name } }
    assert_redirected_to sphere_url(@sphere)
  end

  test "should destroy sphere" do
    assert_difference('Sphere.count', -1) do
      delete sphere_url(@sphere)
    end

    assert_redirected_to spheres_url
  end
end
