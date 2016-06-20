var chore;
$( document ).ready( function (){
  $('#addButton').on('click', function(){
    chore = $('#chore').val();
      console.log('chore this is  ' + chore);

    var newChoreSucksToBeYou = {
      "chore": chore,
        };//end newChoreSucksToBeYou object

    console.log(newChoreSucksToBeYou);

    $.ajax({
      type :'POST',
      url:'/newChore',
      data: newChoreSucksToBeYou
    });//end ajax

  $('#getChores').on('click', function(){
    $.ajax({
      type: 'GET',
      url:'/getChores',
      success: function( data ){

      }
      });

    console.log("Something happened");
    showChores();
    });//end ajax get

  });//end button
  function showChores (megans_chores){
    console.log ('in show chores'+ megans_chores);
    for( i=0; i<megans_chores.length; i++){
      var choreOut = "<p>" + megans_chores[i].chore + "  " + users[i].completed+ "</p>";
      $('#dailyChoreList').append(choreOut);

      //$('#outputDiv').append( userOut );
      //var didChore = <button id="Chore # " + megans_chores[ i ].id + "Chore: " + megans_chores[i].chore>Completed!</button>;
      $('#dailyChoreList').append( choreOut );
    }
  }

});
