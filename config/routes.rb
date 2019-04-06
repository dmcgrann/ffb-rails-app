Rails.application.routes.draw do

  root "welcome#home"
  get '/signup',  to: 'users#new'
  post '/signup', to: 'users#create'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  get 'auth/google_oauth2/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')

  resources :users, only: [:index, :show, :new, :create, :destroy] do
    resources :teams, only: [:show, :new, :create, :edit, :update, :destroy]
  end

  resources :leagues do
    resources :users
  end
  get '/leagues/:id/league_data', to: 'leagues#league_data'
  resources :teams
  resources :session, only: [:create, :destroy]
  resources :players

end
