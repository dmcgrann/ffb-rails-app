function Player(player_name, position, nfl_team) {
  this.player_name = player_name;
  this.position = position;
  this.nfl_team = nfl_team;
}

Player.prototype.entry = function() {
  return `<a href= "players/${this.id}"> ${this.player_name}, ${this.position}, ${this.nfl_team} </a>`
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
  $("a.all").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let playerList = "";
      list.forEach(function(player){
        playerList += "<p>" + Player.prototype.entry.call(player) + "</p>"
      })
    $("#players").html('').prepend(playerList);
    })
  })
}

function nextPlayer() {
  $(".js-next").click(function(e) {
    e.preventDefault();
    let nextId = parseInt($(".js-next").attr("data-id")) + 1;
    let response = $.get("/players/" + nextId + ".json")
    response.done(function(data) {
        $("#playerName").text(data["player_name"]);
        $("#playerPosition").text(data["position"]);
        $("#playerNflTeam").text(data["nfl_team"]);
        $(".js-next").attr("data-id", data["id"]);
    }).fail(function(data) {
      alert("No more players here!")
        window.history.back();
    })
    e.stopImmediatePropagation();

  });
}
