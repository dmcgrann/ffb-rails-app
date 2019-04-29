
function listPlayers() {
  return `<a href= "players/${this.id}"> ${this.player_name}, ${this.position}, ${this.nfl_team}</a>`;
}


function listQBs() {
  $("a.qbs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let quarterBacks = "";
      list.forEach(function(player){
        if (player["position"] === "QB") {
          quarterBacks += `<p>${listPlayers.call(player)}</p>`;
        };
      });
    $("#players").html('').prepend(quarterBacks);
  });
    e.stopImmediatePropagation();
  });
}

function listRBs() {
  $("a.rbs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let runningBacks = "";
      list.forEach(function(player){
        if (player["position"] === "RB") {
          runningBacks += `<p>${listPlayers.call(player)}</p>`;
        };
      });
    $("#players").html('').prepend(runningBacks);
  });
    e.stopImmediatePropagation();
  });
}

function listWRs() {
  $("a.wrs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let wideReceivers = "";
      list.forEach(function(player){
        if (player["position"] === "WR") {
          wideReceivers += `<p>${listPlayers.call(player)}</p>`;
        };
      });
    $("#players").html('').prepend(wideReceivers);
  });
    e.stopImmediatePropagation();
  });
}

function listTEs() {
  $("a.tes").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
    let list = data;
    let tightEnds = "";
      list.forEach(function(player){
        if (player["position"] === "TE") {
          tightEnds += `<p>${listPlayers.call(player)}</p>`;
        };
      });
    $("#players").html('').prepend(tightEnds);
  });
    e.stopImmediatePropagation();
  });
}

function allPlayers() {
  $("a.all").click(function(e){
    e.preventDefault();
  //   $.get("/players" + ".json", function(data){
  //   let list = data;
  //   let playerList = "";
  //     list.forEach(function(player){
  //       playerList += `<p>${listPlayers.call(player)}</p>`;
  //     });
  //   $("#players").html('').prepend(playerList);
  // });
  //   e.stopImmediatePropagation();
  fetch('/players.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        // console.log(data);
        let list = data;
        let playerList = "";
          list.forEach(function(player){
            playerList += `<p>${listPlayers.call(player)}</p>`;
          });
        $("#players").html('').prepend(playerList);
        });
    }
  )
  e.stopImmediatePropagation();
  });
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
    });
    e.stopImmediatePropagation();

  });
}

function playerListeners() {
  listQBs();
  listRBs();
  listWRs();
  listTEs();
  allPlayers();
  nextPlayer();
}
