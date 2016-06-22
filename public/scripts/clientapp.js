var chore;

$( document ).ready( function (){

  $('#addButton').on('click', function(){

    chore = $('#chore').val();

    console.log('chore this is  ' + chore);

    var newChoreSucksToBeYou = {chore: chore};//end newChoreSucksToBeYou object

    console.log("sucks to be you" + newChoreSucksToBeYou);

    $.ajax({
      type :'POST',
      url:'/newChore',
      data: newChoreSucksToBeYou,
      success: function(response) {
        console.log(response);
        console.log('we did it!');
      }
    });//end ajax

  });

  $('#getChores').on('click', function(){
    $.ajax({
      type: 'GET',
      url:'/getChores',
      success: function( data ){
        console.log("Something happened");
        showChores();
      }
      }); //end ajax get


    //showChores();


  });//end button

  function showChores (data){
    $('#dailyChoreList').empty();
    console.log ('in show chores'+ data);
    for( i=0; i<megans_chores.length; i++){
      var choreOut = "<p>" + megans_chores[i].chore + "  " + megans_chores[i].completed+ "</p>";
      $('#dailyChoreList').append(choreOut);


      // var didChore = <button id= Chore # " + megans_chores[ i ].id + "Chore: " + megans_chores[i].completed>"Completed!"</button>";
      // $('#dailyChoreList').append( choreOut );
    }
  }

});
