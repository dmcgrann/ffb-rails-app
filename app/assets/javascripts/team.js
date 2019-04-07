
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
    let url = "/users/" + user + id

    $.ajax({
      url: url,
      data: values,
      dataType: "json",
      method: "PUT"
    }).done(function(stuff) {
      let players = stuff["players"];
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
  document.getElementById("player_submit").disabled = false;
}
