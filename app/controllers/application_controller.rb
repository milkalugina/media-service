class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # не всегда, но при лайке появлялась ошибка InvalidAuthenticityToken, поэтому добавляю это
  skip_before_action :verify_authenticity_token

    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
			devise_parameter_sanitizer.permit(:account_update, keys: [:username])
    end
end
