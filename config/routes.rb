Rails.application.routes.draw do
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :posts do
    resources :favorites
  end
  resources :subscribers
  get 'posts/index'
  
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show', :as => :user
  delete 'users/:id', to: 'users#destroy'

  root 'promo#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
