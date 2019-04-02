$(document).on('ready turbolinks:load', function() {
  getLeagues();
})


function getLeagues() {
  $("a.details").click(function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let league = data;
      let leagueDetails = "<p>" + "<strong>Draft Type:</strong>" + " " + league["draft"] + "</p><p>" + "<strong>Scoring Style:</strong>" + " " + league["scoring"] + "</p>" + "<h4>" + "Teams" + "</h4>";
      $("#league-" + id).html(leagueDetails);

      let teams = league["teams"];
      let teamList = "";
      teams.forEach(function(team) {

        teamList += '<p data-id="' + team["id"] + '">' + team["team_name"] + '</p>';
      });
      $("#league-" + id + "-teams").html(teamList);
    })
  })
}


function newLeague() {
  $('form').submit(function(e) {
    e.preventDefault();

    let values = $(this).serialize();
    let info = $.post("/leagues", values)

    info.done(function(data) {
      let league = data
      $("#leagueName").html(league["name"])
      $("#leagueScoring").html(league["scoring"])
      $("#leagueDraft").html(league["draft"])
    })
  })
}
