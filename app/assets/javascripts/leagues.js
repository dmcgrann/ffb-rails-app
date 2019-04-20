class League {
  constructor(name, scoring, draft) {
    this.name = name;
    this.scoring = scoring;
    this.draft = draft;
    this.teams = []
  }
}

League.prototype.details = function() {
  return `<p> Scoring: ${this.scoring} <br> Draft: ${this.draft} <br> Teams: ${this.teams}</p> `;
}

function getLeagues() {
  $("a.details").click(function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let league = new League(data);
      // make league object and invoke details
      let leagueDetails = league.details();
      $("#league-" + id).html(leagueDetails);

      // let teams = league["teams"];
      // let teamList = "";
      // teams.forEach(function(team) {
      //
      //   teamList += '<ul data-id="' + team["id"] + '">' + team["team_name"] + '</ul>';
      // });
      // $("#league-" + id + "-teams").html(teamList);
    });
    e.stopImmediatePropagation();
  });
}


function newLeague() {
  $('#new_league').submit(function(e) {
      e.preventDefault();
      let values = $(this).serialize();
      let result = $.post('/leagues', values)
      result.done(function(response) {
        clearForm();
        let league = response;
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

function leagueListeners() {
  getLeagues();
  newLeague();
}
