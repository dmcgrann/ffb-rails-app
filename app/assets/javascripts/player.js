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


function listQBs() {
  $("a.qbs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
      list = []
      data.forEach(function(qb){
        let playerAttrs = new Player(qb);
        let playerDetails = playerAttrs.listPlayers();
        if (qb["position"] === "QB") {
          list.push(playerDetails)
        };

      });
    $("#players").html('').prepend(list);
  });
    e.stopImmediatePropagation();
  });
}

function listRBs() {
  $("a.rbs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
      list = []
      data.forEach(function(rb){
        let playerAttrs = new Player(rb);
        let playerDetails = playerAttrs.listPlayers();
        if (rb["position"] === "RB") {
          list.push(playerDetails)
        };

      });
    $("#players").html('').prepend(list);
  });
    e.stopImmediatePropagation();
  });
}

function listWRs() {
  $("a.wrs").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
      list = []
      data.forEach(function(wr){
        let playerAttrs = new Player(wr);
        let playerDetails = playerAttrs.listPlayers();
        if (wr["position"] === "WR") {
          list.push(playerDetails)
        };

      });
    $("#players").html('').prepend(list);
  });
    e.stopImmediatePropagation();
  });
}

function listTEs() {
  $("a.tes").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
      list = []
      data.forEach(function(te){
        let playerAttrs = new Player(te);
        let playerDetails = playerAttrs.listPlayers();
        if (te["position"] === "TE") {
          list.push(playerDetails)
        };

      });
    $("#players").html('').prepend(list);
  });
    e.stopImmediatePropagation();
  });
}

function listByTeam() {
  $("a.teams").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
      data.sort(function(a, b) {
        const nameA = a.nfl_team.toUpperCase(); // ignore upper and lowercase
        const nameB = b.nfl_team.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
    });

    list = []
    data.forEach(function(sorted){
      let playerAttrs = new Player(sorted);
      let playerDetails = playerAttrs.listPlayers();
        list.push(playerDetails)
      });
      $("#players").html('').prepend(list);
    });
    e.stopImmediatePropagation();
  });
}

function allPlayers() {
  $("a.all").click(function(e){
    e.preventDefault();
    $.get("/players" + ".json", function(data){
      list = []
      data.forEach(function(all){
        let playerAttrs = new Player(all);
        let playerDetails = playerAttrs.listPlayers();

          list.push(playerDetails)


      });
    $("#players").html('').prepend(list);
  });
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
  listByTeam();
}
