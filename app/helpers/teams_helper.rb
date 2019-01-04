module TeamsHelper

  def user_id_field(team)
    if team.user.nil? || current_user.admin
      select_tag "team[user_id]", options_from_collection_for_select(User.all, :id, :name)
    else
      hidden_field_tag "team[user_id]", team.user_id
    end
  end

end
