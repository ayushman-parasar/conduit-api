Rails.application.routes.draw do
  get 'users/new'
  
  namespace :api do
    namespace :v1 do
      resources :users
      resources :articles
      # get "/tags"=>"tags#index"
      resources :tags, only: :index
      
    end
  end
  resources :sessions
  get "users/:user_id/feed"=>"users#show_feed"
  get "users/:id/settings"=> "users#show"

  root "home#index"
  get '*path', to: 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
