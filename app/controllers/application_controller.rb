class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?


    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:firstname, :lastname, :middlename, :phonenumb, :country, :city,:orgname, :orgtype, :datecreation, :phonenumber, :website, :vk, :facebook, :instagram, :youtube, :ok, :role, :mission, :registrationdoc, :foundersdoc, :nonprofdoc, :phonenumber, :regcode, :country, :city, :volinterests, :volexperience, :education, :interests, :emptype, :workplace, :position])
			devise_parameter_sanitizer.permit(:account_update, keys: [:firstname, :lastname, :middlename, :phonenumb, :country, :city,:orgname, :orgtype, :datecreation, :phonenumber, :website, :vk, :facebook, :instagram, :youtube, :ok, :role, :mission, :registrationdoc, :foundersdoc, :nonprofdoc, :phonenumber, :regcode, :country, :city, :volinterests, :volexperience, :education, :interests, :emptype, :workplace, :position, :image])
    end

    # не всегда, но при лайке появлялась ошибка InvalidAuthenticityToken, поэтому добавляю это
    skip_before_action :verify_authenticity_token
end
