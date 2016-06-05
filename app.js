var express = require( 'express' );
var app = express();

var path = require('path');
var fs = require('fs');

app.use(express.static('client/build'));

app.get( '/', function( req, res ) {
  res.sendFile( path.join(__dirname + '/client/build/index.html') );
});

app.listen( 3000, function() {
  console.log( 'listening on 3000' )
})
