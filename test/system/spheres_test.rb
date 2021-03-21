require "application_system_test_case"

class SpheresTest < ApplicationSystemTestCase
  setup do
    @sphere = spheres(:one)
  end

  test "visiting the index" do
    visit spheres_url
    assert_selector "h1", text: "Spheres"
  end

  test "creating a Sphere" do
    visit spheres_url
    click_on "New Sphere"

    fill_in "Name", with: @sphere.name
    click_on "Create Sphere"

    assert_text "Sphere was successfully created"
    click_on "Back"
  end

  test "updating a Sphere" do
    visit spheres_url
    click_on "Edit", match: :first

    fill_in "Name", with: @sphere.name
    click_on "Update Sphere"

    assert_text "Sphere was successfully updated"
    click_on "Back"
  end

  test "destroying a Sphere" do
    visit spheres_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sphere was successfully destroyed"
  end
end
