$(document).on('ready turbolinks:load', function() {
  getLeagues();
})


function getLeagues() {
  $(".details").on("click", function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let league = data;
      let leagueDetails = "<ul>" + "<li>" + "<em>Draft Type:</em>" + " " + league["draft"] + "</li>" + "<li>" + "<em>Scoring Style:</em>" + " " + league["scoring"] + "</li>" + "</ul>";
      $("#league-" + id).html(leagueDetails)
    })
  })
}
