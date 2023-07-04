Rails.application.routes.draw do
  resources :songs do 
    resources :ratings
  end
  resources :listeners, except: [:show]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "listeners#show"

  #route to create ratings through the song
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
