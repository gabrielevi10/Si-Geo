require 'test_helper'

class CountryStatesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @country_state = country_states(:one)
  end

  test "should get index" do
    get country_states_url
    assert_response :success
  end

  test "should get new" do
    get new_country_state_url
    assert_response :success
  end

  test "should create country_state" do
    assert_difference('CountryState.count') do
      post country_states_url, params: { country_state: { name: @country_state.name } }
    end

    assert_redirected_to country_state_url(CountryState.last)
  end

  test "should show country_state" do
    get country_state_url(@country_state)
    assert_response :success
  end

  test "should get edit" do
    get edit_country_state_url(@country_state)
    assert_response :success
  end

  test "should update country_state" do
    patch country_state_url(@country_state), params: { country_state: { name: @country_state.name } }
    assert_redirected_to country_state_url(@country_state)
  end

  test "should destroy country_state" do
    assert_difference('CountryState.count', -1) do
      delete country_state_url(@country_state)
    end

    assert_redirected_to country_states_url
  end
end
