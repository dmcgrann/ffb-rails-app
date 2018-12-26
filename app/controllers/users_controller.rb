class UsersController < ApplicationController
  include SessionsHelper

    def index
      @users = User.all
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)
      if @user.save
        session[:user_id] = @user.id
        redirect_to user_path(@user)
      else
        redirect_to new_user_path
      end
    end

    def show
      @user = User.find_by(id: session[:user_id])
      redirect_to root_path if !current_user
    end

    def destroy
      if current_user.admin && logged_in?
        @user = User.find(params[:id])
        if @user.id === current_user.id
          flash[:alert] = "Admins can't delete themselves, contact FFB App."
          redirect_to root_path
        else
          @user.destroy
          flash[:alert] = "User deleted."
          redirect_to users_path
        end
      else
        flash[:alert] = "You do not have permission to delete users!"
        redirect_to root_path
      end
    end

    private

    def user_params
      params.require(:user).permit(:name, :password, :admin, :uid, :provider, :oauth_token)
    end
end
