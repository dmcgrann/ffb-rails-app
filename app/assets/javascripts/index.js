$(document).on('ready turbolinks:load', function() {
  attachListeners();
})


function attachListeners() {
  playerListeners();
  teamListeners();
  leagueListeners();
}
