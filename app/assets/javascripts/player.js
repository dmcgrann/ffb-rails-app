$(document).on('ready turbolinks:load', function() {
  attachListeners();
  allPlayers();
})

function Player(player_name, position, nfl_team) {
  this.player_name = player_name;
  this.position = position;
  this.nfl_team = nfl_team;
}

Player.prototype.entry = function() {
  return `${this.player_name}, ${this.nfl_team}`
}

function listQBs() {
  $("a.qbs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let quarterBacks = "";
      list.forEach(function(player){
        if (player["position"] === "QB") {
          quarterBacks += "<p>" + Player.prototype.entry.call(player) + "</p>"
        }
      })
    $("#players").html('').prepend(quarterBacks);
    })
  })
}

function listRBs() {
  $("a.rbs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let runningBacks = "";
      list.forEach(function(player){
        if (player["position"] === "RB") {
          runningBacks += "<p>" + Player.prototype.entry.call(player) + "</p>"
        }
      })
    $("#players").html('').prepend(runningBacks);
    })
  })
}

function listWRs() {
  $("a.wrs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let wideReceivers = "";
      list.forEach(function(player){
        if (player["position"] === "WR") {
          wideReceivers += "<p>" + Player.prototype.entry.call(player) + "</p>"
        }
      })
    $("#players").html('').prepend(wideReceivers);
    })
  })
}

function listTEs() {
  $("a.tes").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let tightEnds = "";
      list.forEach(function(player){
        if (player["position"] === "TE") {
          tightEnds += "<p>" + Player.prototype.entry.call(player) + "</p>"
        }
      })
    $("#players").html('').prepend(tightEnds);
    })
  })
}

function allPlayers() {
  $.get("/players" + ".json", function(data){
  let list = data;
  let all = "";
    list.forEach(function(player){
      all += "<p>" + Player.prototype.entry.call(player) + "</p>"
    })
  $("#players").html(all);
  })
}

function newPlayer() {
  $('form').submit(function(event) {
      //prevent form from submitting the default way
      event.preventDefault();

      var values = $(this).serialize();

      var result = $.post('/players', values);

      result.done(function(data) {
        var player = data;
        $("#playerName").text(player["player_name"]);
        $("#playerPosition").text(player["position"]);
        $("#playerTeam").text(player["nfl_team"]);
      });
    });
  }


function attachListeners() {
  listQBs();
  listRBs();
  listWRs();
  listTEs();
  newPlayer();
}
