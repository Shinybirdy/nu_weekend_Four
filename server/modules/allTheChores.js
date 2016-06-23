var express = require ('express');
var app = express ();
var bodyParser = require('body-parser');

var path = require ('path');
var pg = require('pg');
var urlencodedParser = bodyParser.urlencoded( { extended : false });
var allChores = [];
var connectionString = 'postgres://localhost:5432/chores';

var theChores = [];


var choreObject = {
  "chore": chore,
  "completed": boolean,

};

var allTheChores = function(){
return ("in Chore Object module");
};

module.exports = allTheChores();
