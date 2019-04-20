class League {
  constructor(league) {
    this.name = league.name;
    this.scoring = league.scoring;
    this.draft = league.draft;
    this.teams = league.teams
  }
  teamList(){
    let y = ""
    this.teams.forEach(function(a){
      y += `<ul><li>${a["team_name"]}</li></ul>`
    })
    return y
  }
}

League.prototype.info = function() {
  return `<p>Name: ${this.name}</p>
  <p>Scoring: ${this.scoring}</p>
  <p>Draft: ${this.draft}</p>`;
}

League.prototype.details = function() {
  return `
  <p>Scoring: ${this.scoring}</p>
  <p>Draft: ${this.draft}</p>
  <p><strong>Teams</strong></p>
  ${this.teamList()}
  `;
}

function getLeagues() {
  $("a.details").click(function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let leagueAttrs = new League(data)
      let leagueDetails = leagueAttrs.details()
      $("#league-" + id).html(leagueDetails);

      // let teams = data["teams"];
      // let teamList = "";
      // teams.forEach(function(team) {
      //   teamList += `<ul data-id= "${team["id"]}"> ${team["team_name"]} </ul>`;
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
        let newLeague = new League(response)
        let leagueDiv = newLeague.info();
        $("#display").html(leagueDiv)
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
