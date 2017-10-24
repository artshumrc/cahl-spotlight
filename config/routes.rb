Rails.application.routes.draw do
	match '/about' => 'app#index', via: [:get, :post]
	match '/explore' => 'app#index', via: [:get, :post]
	match '/cahl/browse' => 'app#index', via: [:get, :post]
	match '/cahl/catalog/' => 'app#index', via: [:get, :post]
	root 'app#index'
end
