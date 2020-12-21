Rails.application.routes.draw do
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :posts
  resources :subscribers
  get 'posts/index'
  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  root 'promo#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
