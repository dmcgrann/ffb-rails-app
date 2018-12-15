Rails.application.routes.draw do

  root "welcome#home"
  get '/signup',  to: 'users#new'
  post '/signup', to: 'users#create'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'

  get 'auth/google_oauth2/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')

  resources :users do
    resources :teams, only: [:index, :show, :update]
  end
  resources :leagues do
    resources :teams
  end
  resources :teams
  resources :session, only: [:create, :destroy]

end
