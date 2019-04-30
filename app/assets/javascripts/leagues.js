class League {
  constructor(league) {
    this.name = league.name;
    this.scoring = league.scoring;
    this.draft = league.draft;
    this.teams = league.teams
  }
  teamList(){
    let list = ""
    this.teams.forEach(function(team){
      list += `<ul><li>${team["team_name"]}</li></ul>`
    })
    return list
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
    const id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      const leagueAttrs = new League(data)
      const leagueDetails = leagueAttrs.details()
      $("#league-" + id).html(leagueDetails);
    });
    e.stopImmediatePropagation();
  });
}


function newLeague() {
  $('#new_league').submit(function(e) {
      e.preventDefault();
      const values = $(this).serialize();
      const result = $.post('/leagues', values)
      result.done(function(response) {
        clearForm();
        const newLeague = new League(response)
        const leagueDiv = newLeague.info();
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
