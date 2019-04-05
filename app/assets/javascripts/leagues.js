function getLeagues() {
  $("a.details").click(function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let league = data;
      let leagueDetails = "<p>" + "<strong>Draft Type:</strong>" + " " + league["draft"] + "</p><p>" + "<strong>Scoring Style:</strong>" + " " + league["scoring"] + "</p>" + "<h4>" + "Users" + "</h4>";
      $("#league-" + id).html(leagueDetails);

      let users = league["users"];
      let userList = "";
      users.forEach(function(user) {

        userList += '<p data-id="' + user["id"] + '">' + user["name"] + '</p>';
      });
      $("#league-" + id + "-users").html(userList);
    })
  })
}


function newLeague() {
  $('form#new_league').submit(function(e) {
      e.preventDefault();
      let values = $(this).serialize();
      let result = $.post('/leagues', values)
      result.done(function(response) {
        clearForm();
        var league = response;
        $("#leagueName").text(league["name"]);
        $("#leagueDraft").text(league["draft"]);
        $("#leagueScoring").text(league["scoring"]);
      });
    });
  }

function clearForm() {
  document.getElementById("new_submit").disabled = false;
  $(':input','#new_league') .not(':button, :submit, :reset, :hidden') .val('')

}
