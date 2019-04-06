function showHide() {
    $('#playerForm').hide();

    $('#add').click(function(e) {
    $('#playerForm').show();

    e.preventDefault();
  })

}

function addPlayers() {
  $(".edit_team").submit(function(e){
    e.preventDefault();
    let values = $(this).serialize();
    let id = $(this).attr("action")
    let user = $("input[name='team[user_id]']").attr("value")
    let result = $.post("/users/" + user + id, values)
    result.done(function(response) {

    console.log(response);
    });

  })
}

function Team(team_name) {
  this.team_name = team_name
}

Team.prototype.ids = function() {
  return `${this.id}`
}
