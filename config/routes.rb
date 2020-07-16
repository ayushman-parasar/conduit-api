Rails.application.routes.draw do
  get 'users/new'
  root "static_pages#index"
  
  resources :users
  resources :articles
  resources :sessions
  get "tags"=>"tags#index"
  get "users/:user_id/feed"=>"users#show_feed"
  get "users/:id/settings"=> "users#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
