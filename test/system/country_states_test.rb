require "application_system_test_case"

class CountryStatesTest < ApplicationSystemTestCase
  setup do
    @country_state = country_states(:one)
  end

  test "visiting the index" do
    visit country_states_url
    assert_selector "h1", text: "Country States"
  end

  test "creating a Country state" do
    visit country_states_url
    click_on "New Country State"

    fill_in "Name", with: @country_state.name
    click_on "Create Country state"

    assert_text "Country state was successfully created"
    click_on "Back"
  end

  test "updating a Country state" do
    visit country_states_url
    click_on "Edit", match: :first

    fill_in "Name", with: @country_state.name
    click_on "Update Country state"

    assert_text "Country state was successfully updated"
    click_on "Back"
  end

  test "destroying a Country state" do
    visit country_states_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Country state was successfully destroyed"
  end
end
