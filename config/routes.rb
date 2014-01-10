LifePhotos::Application.routes.draw do

  post "panda/authorize_upload" , :to => "panda#authorize_upload"

  resources :videos

  namespace :lifephoto do
    get '/calendar' => 'albums#calendar'
    resources :albums do
      collection do
        get 'my_list', defaults: { format: 'json' }
      end
      member do
        get 'guest_user_show'
      end
    end
    resources :photos do
      collection do
        get 'my_list'
        get 'multi_upload'
      end
    end
    resources :groups  do
      collection do
        get 'my_groups', {format: :json }
      end
      resources  :group_member, to: 'groups/group_member' do
        collection do
          get 'invite_member'
          post 'invite'
        end
      end
    end
    get "/groups/:group_id/join_this_group"  =>  "groups/group_member#join_this_group"
    resources :events do
      collection do
        get 'event_list', {format: :json }
      end
    end
  end

  ##################
  get '/calendar' => 'albums#calendar'
  resources :maps ,only: [:index, :new, :create] do end
  get :markers, to: 'maps#markers'
  #end

  #facebook login 
  get "/:provider/login"  => "sessions#new"
  get "/logout" => "sessions#destroy"
  get "/auth/:provider/callback" => "sessions#create" unless Rails.env.development?
  post "/auth/:provider/callback" => "sessions#create" if Rails.env.development?
  get "/auth/failure" => "sessions#failuer"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'lifephoto/top#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
