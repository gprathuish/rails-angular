Rails.application.routes.draw do

	get 'getdata', to: 'main#index' , defaults: { format: 'json' }
	# scope '/api/v1', defaults: { format: 'json' } do
	#
	#   	get 'index', to: 'main#index'
	#
	# end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
