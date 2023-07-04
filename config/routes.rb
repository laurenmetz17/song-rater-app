Rails.application.routes.draw do
  resources :songs do 
    resources :ratings
  end
  resources :listeners, except: [:show]

  post '/login', to: "sessions#create"
  get '/me', to: "listeners#show"

  #custom route for listener log in and creating songs or ratings?
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
