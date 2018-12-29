class SessionsController < ApplicationController

  def create
    if auth_hash = request.env["omniauth.auth"]
      user = User.from_omniauth(auth_hash)
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      user = User.find_by(:name => params[:name])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to user_path(user)
      else
        flash[:alert] = "Please signup."
        redirect_to signup_path
      end
    end
  end


  def destroy
    reset_session
    redirect_to login_path
  end


end
