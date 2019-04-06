function showHide() {
    $('#playerForm').hide();

    $('#add').click(function(e) {
    $('#playerForm').show();

    e.preventDefault();
  })

}

function addPlayers() {
  $("#edit_team").submit(function(e){
    e.preventDefault();
    let values = $(this).serialize();
    let result = $.post('/teams', values)
    result.done(function(response) {
      console.log(data)
    });

  })
}
