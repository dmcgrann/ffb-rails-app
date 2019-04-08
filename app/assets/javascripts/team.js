
function showHide() {
    $('#teamForm').hide();

    $('#add').click(function(e) {
    $('#teamForm').show();

    e.preventDefault();
  })

}

function updateTeam() {
  $(".edit_team").submit(function(e){
    e.preventDefault();
    let values = $(this).serialize();
    let id = $(this).attr("action")
    let user = $("input[name='team[user_id]']").attr("value")
    let url = "/users/" + user + id

    $.ajax({
      url: url,
      data: values,
      dataType: "json",
      method: "PUT"
    }).done(function(item) {
      let name = item["team_name"]
      $("#teamName").html('').prepend(name);


      let players = item["players"];
      let playerList = "";
      players.forEach(function(player) {

        playerList += '<ul data-id="' + player["id"] + '">' + player["player_name"] + '</ul>';
      });
      $("#teamPlayers").html('').prepend(playerList);
      showHide();
      closeForm();
    })
    .fail(function(error){
      console.log(JSON.stringify(error));
    })
    e.stopImmediatePropagation();
  })
}

function closeForm() {
  document.getElementById("team_submit").disabled = false;
}
