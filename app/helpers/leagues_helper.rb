module LeaguesHelper

  def user_id(league)
      select_tag "league[user_id]", options_from_collection_for_select(User.all, :id, :name)
  end

end
