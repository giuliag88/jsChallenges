//  STEP 1: package.json file makes a directory a node project (in this case the directory "socialApp")
//  STEP 2: server.js which runs the web server
//  STEP 3: db.js is the file which runs the database via mongodb
//  STEP 4: post.js defines the structure of how a post is saved on mongodb

var express = require('express');
var bodyParser = require('body-parser');



var app = express();
app.use(bodyParser.json());

app.use(require('./controllers/api/posts'));
app.use(require('./controllers/static'));


app.listen(3000, function() {
  console.log('Server listening on', 3000);
});
