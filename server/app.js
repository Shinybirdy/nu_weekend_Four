var express = require ('express');
var app = express ();
var path = require ('path');
var bodyParser = require('body-parser');
var pg = require('pg');

var urlencodedParser = bodyParser.urlencoded( { extended : false });
var connectionString = 'postgres://localhost:5432/chores';
//var allTheChores = require('./modules/allTheChores');

//here is the server
app.listen(3000, 'localhost', function(req,res){
  console.log('server! We are running on 3000');
});

//public folder is static
app.use (express.static('public'));

//going to post this shizzzzz
app.post('/newChore', urlencodedParser, function( req, res ){

  console.log('in the posty' + req.body.chore);

  pg.connect(connectionString, function(err, client, done){

    if( err ){
      console.log( err );
    } else{
      client.query("INSERT INTO megans_chores (chore) VALUES($1)", [req.body.chore]);
    }
  });

});

app.get('/getChores', function(req,res){
  console.log("in /get Chores");
  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log("Damn! You got an ERR!");
    }else{
      var allChores = client.query("SELECT * FROM megans_chores ORDER BY id DESC");
      //for each row
      console.log("hey getchores");
      allChores.on( 'row', function( row ){
        results.push(row);
      });
      allChores.on( 'row', function (row) {
        return res.json(results);
      });
    }
  });
  res.send('in get chores');
  res.write( allTheChores());
  res.end();
});//end getChores

//base url - works. It SOOOOO Works! I can finally see my index page on local host
app.get('/', function(req,res){
  console.log("base url");
  res.sendFile(path.resolve('views/index.html'));
});
