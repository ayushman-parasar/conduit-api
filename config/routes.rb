Rails.application.routes.draw do
  get 'users/new'
  root "static_pages#index"
  
  resources :users
  resources :articles
  resources :sessions
  get "tags"=>"tags#index"
  get "/:user_id/feed"=>"articles#user_feed"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
