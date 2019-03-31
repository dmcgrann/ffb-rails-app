// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

$(document).on('ready turbolinks:load', function() {
  attachListeners();
  allPlayers();
})

function Player(player_name, position, nfl_team) {
  this.player_name = name;
  this.position = position;
  this.nfl_team = team;
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
        if (player["position"] === "RB") {
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

function attachListeners() {
  listQBs();
  listRBs();
  listWRs();
  listTEs();
}
