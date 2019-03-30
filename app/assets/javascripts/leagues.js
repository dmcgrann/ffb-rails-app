$(document).on('ready turbolinks:load', function() {
  getLeagues();
})


function getLeagues() {
  $(".details").on("click", function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      let league = data;
      let leagueDetails = "<ul>" + "<li>" + league["draft"] + "</li>" + "<li>" + league["scoring"] + "</li>" + "</ul>";
      console.log(leagueDetails)
    })
  })
}
