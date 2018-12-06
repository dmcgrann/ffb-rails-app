class SessionsController < ApplicationController

  def create
    if auth = request.env["omniauth.auth"]
      user = User.from_omniauth(auth)
      session[:user_id] = user.id
      flash[:success] = "Welcome, #{user.name}"
      redirect_to users_path

    else
      user = User.find_by(:name => params[:name])
      if user && user.authenticate(params[:password])
        session[:user_id] = user.id
        redirect_to users_path
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
