Rails.application.routes.draw do
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get 'pages/fases'

  get 'pages/tutorial'

  get 'pages/creditos'

  get 'pages/lideres'

  get 'pages/licenca'

  #get '/menu', to: 'pages#menu'
  
end
