class NewslettersController < ApplicationController
    before_action :set_newsletter, only: [:destroy, :show, :edit, :update]
    before_action :authenticate_adm!

    def index
        @newsletter = Newsletter.all
    end

    def new
        @newsletter = Newsletter.new
    end

    def create
        @newsletter = Newsletter.new(newsletter_params)
          if @newsletter.save
            if @newsletter.country == "Brazil" && @newsletter.state.to_s == ""
              render :new2
            else
              redirect_to :action => 'index'
            end
          else
              render :new
          end
        end

    def destroy
        @newsletter.destroy
        redirect_to :action => 'index'
    end

    def edit
    end

    def update
        if @newsletter.update(newsletter_params)
            redirect_to :action => 'index'
        else
            render :edit
        end
    end

    def show

    end

    private

    def set_newsletter
        @newsletter = Newsletter.find(params[:id])
    end

    def newsletter_params
        params.require(:newsletter).permit(:title, :description, :link, :country, :state)
    end

end
