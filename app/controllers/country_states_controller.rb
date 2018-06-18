class CountryStatesController < ApplicationController
  before_action :set_country_state, only: [:show, :edit, :update, :destroy]

  # GET /country_states
  # GET /country_states.json
  def index
    @country_states = CountryState.all
  end

  # GET /country_states/1
  # GET /country_states/1.json
  def show
  end

  # GET /country_states/new
  def new
    @country_state = CountryState.new
  end

  # GET /country_states/1/edit
  def edit
  end

  # POST /country_states
  # POST /country_states.json
  def create
    @country_state = CountryState.new(country_state_params)

    respond_to do |format|
      if @country_state.save
        format.html { redirect_to @country_state, notice: 'Country state was successfully created.' }
        format.json { render :show, status: :created, location: @country_state }
      else
        format.html { render :new }
        format.json { render json: @country_state.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /country_states/1
  # PATCH/PUT /country_states/1.json
  def update
    respond_to do |format|
      if @country_state.update(country_state_params)
        format.html { redirect_to @country_state, notice: 'Country state was successfully updated.' }
        format.json { render :show, status: :ok, location: @country_state }
      else
        format.html { render :edit }
        format.json { render json: @country_state.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /country_states/1
  # DELETE /country_states/1.json
  def destroy
    @country_state.destroy
    respond_to do |format|
      format.html { redirect_to country_states_url, notice: 'Country state was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_country_state
      @country_state = CountryState.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def country_state_params
      params.require(:country_state).permit(:name)
    end
end
