Rails.application.routes.draw do
	get '*', to: 'app#index'
	root 'app#index'
end
