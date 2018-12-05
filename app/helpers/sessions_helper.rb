module SessionsHelper

  def current_user
    User.find_by(:id => session[:user_id]) || User.where(:provider => 'google_oauth2', :uid => session[:user_id])
  end

  def logged_in?
    current_user.id != nil
  end

end
