function addPlayers() {
    $('#players').hide();

    $('#add').on('click', function(e) {
    $('#players').show();
    
    e.preventDefault();
  })

}
