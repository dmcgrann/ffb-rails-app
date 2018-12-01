class SessionsController < ApplicationController

  def new
      @user = User.new
    end

    def create
      @user = User.find_by(username: params[:user_username])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to user_path(@user)
      else
        flash[:alert] = "Please signup."
        redirect_to signup_path
      end
    end

    def destroy
      session.clear
      redirect_to root_url
    end

end
