$(document).on('ready turbolinks:load', function() {
  getLeagues();
})


function getLeagues() {
  $(".details").on("click", function(e){
    e.preventDefault();
    let id = $(this).data("id");
    $.get("/leagues/" + id + ".json", function(data){
      alert("OH")
      console.log(data)
    })
  })
}
