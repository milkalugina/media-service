Rails.application.routes.draw do
  get 'aboutorg/index'
  devise_for :users, path: 'users'
  devise_for :organizations, path: 'organizations'
  resources :types
  resources :skills
  resources :user_reg_steps
  resources :org_reg_steps
  resources :spheres
  resources :events do
    resources :favorites
  end
  resources :follows
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  resources :posts
  resources :subscribers
  get 'posts/index'

  get 'users/:id/following', :to => "users#following", :as => :following

  resources :users
  post 'users/:id/follow', to: "users#follow", as: "follow_user"
	post 'users/:id/unfollow', to: "users#unfollow", as: "unfollow_user"

  get 'promo', to: 'promo#index'
  get 'welcome', to: 'welcome#index'
  get 'about', to: 'about#index'
  get 'aboutorg', to: 'aboutorg#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show'
  delete 'users/:id', to: 'users#destroy'

  get 'organizations', to: 'organizations#index'
  get 'organizations/:id' => 'organizations#show', :as => :organization
  delete 'organizations/:id', to: 'organizations#destroy'


  get 'new', to: 'welcome#create_acc'
  get 'sign_in_like', to: 'welcome#sign_in_like'

  root 'promo#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
