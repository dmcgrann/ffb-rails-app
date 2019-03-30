$(document).on('ready turbolinks:load', function() {
  getLeagues();
})


function getLeagues() {
  $(".details").on("click", function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let league = data;
      let leagueDetails = "<p>" + "<em>Draft Type:</em>" + " " + league["draft"] + "|" + "<em>Scoring Style:</em>" + " " + league["scoring"] + "</p>";
      $("#league-" + id).html(leagueDetails);
      let teams = league["teams"];
      let teamList = "";
      teams.forEach(function(team) {
        teamList += '<li class="js-team" data-id="' + team["id"] + '">' + team["team_name"] + '</li>';
      });
      $("#league-" + id + "-teams").html(teamList);
    })
  })
}
