Rails.application.routes.draw do
  get 'users/new'
  root "static_pages#index"
  
  resources :users
  resources :articles
  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
