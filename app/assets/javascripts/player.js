class Player {
  constructor(p) {
    this.id = p.id
    this.player_name = p.player_name;
    this.position = p.position;
    this.nfl_team = p.nfl_team;
  }
}


Player.prototype.listPlayers = function() {
  return `<p><a href= "players/${this.id}"> ${this.player_name}, ${this.position}, ${this.nfl_team}</a></p>`;
}


function lists() {
  $(".anchors").click(function(e){
    e.preventDefault();
    let option = e.target.id;
    $.get("/players" + ".json", function(data){
      list = []
      data.forEach(function(player){
        const playerAttrs = new Player(player);
        const playerDetails = playerAttrs.listPlayers();
        if (player["position"] === "QB" && option == "qbs") {
          list.push(playerDetails)
        }

        if (player["position"] === "RB" && option == "rbs") {
          list.push(playerDetails)
        }

        if (player["position"] === "WR" && option == "wrs") {
          list.push(playerDetails)
        }

        if (player["position"] === "TE" && option == "tes") {
          list.push(playerDetails)
        }else if (option == "all"){
          list.push(playerDetails)
        };

      });
    $("#players").html('').prepend(list);
  });
    e.stopImmediatePropagation();
  });
}

function nextPlayer() {
  $(".js-next").click(function(e) {
    e.preventDefault();
    const nextId = parseInt($(".js-next").attr("data-id")) + 1;
    const response = $.get("/players/" + nextId + ".json")
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
  lists();
  nextPlayer();
}
