Rails.application.routes.draw do
  devise_for :adms
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'maps#index'
  resources :newsletters
end
