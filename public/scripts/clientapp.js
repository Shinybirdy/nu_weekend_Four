var chore;
var data;
$( document ).ready( function (){
    $('#addButton').on('click', function(){
    chore = $('#chore').val();
    event.preventDefault();

      console.log('chore this is  ' + chore);

    var newChoreSucksToBeYou = {
      "chore": chore
    };//end newChoreSucksToBeYou object

  $.ajax({
      type :'POST',
      url:'/newChore',
      data: newChoreSucksToBeYou,
    });//end ajax
  showChores();
  });//end addButton

  $('#getChores').on('click', function(){
 //end ajax get
  });//end getChores button

  function showChores(allChores){
    $.ajax({
      type: 'GET',
      url:'/getChores',
      success: function(data){
        console.log ('in show chores ' + data);
        $('#dailyChoreList').empty();
        for( i=0; i < data.length; i++ ){
          var choreOut = "<p>" + data[i].chore + "  " + data[i].completed+ "</p>";
            console.log("choreOut  " + choreOut);
            $('#dailyChoreList').append(choreOut);
        }

      }
      //showChores();
    });



//end for loop
    } //end showChores





var choreCompleted = function (){
   var didChore = "<button id='done' " + data[ i ].chore + "Done!" + data[i].completed + "'Completed!'</button>";

   $('#getChores').on('click', function(){
     var choreIsDone = false;
   });//end button

      changeStatus();
//$('#getChores').on('click', function(){

      function changeStatus(){
        if( choreIsDone === false){
         $('#done').html("This isn't finished yet");
       } else{
         $('#done').html("I'm Done!");
       } // end if else
     } //end changeStatus
   }; //end choreCompleted

});
