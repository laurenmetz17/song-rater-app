Rails.application.routes.draw do
  resources :songs do 
    resources :ratings
  end
  resources :listeners

  #custom route for listener log in and creating songs or ratings?
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
