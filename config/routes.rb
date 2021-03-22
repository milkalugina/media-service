Rails.application.routes.draw do
  resources :types
  resources :skills
  resources :spheres
  resources :events do
    resources :favorites
  end
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  resources :posts
  resources :subscribers
  get 'posts/index'

  get 'users/:id/following', :to => "users#following", :as => :following

  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
	post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'


  root 'promo#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
