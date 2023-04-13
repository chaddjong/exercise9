const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const url = 'mongodb://localhost:27017/mydatabase';

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;

  const db = client.db('mydatabase');
});

app.get('/users', function(req, res) {
   db.collection('users').find().toArray(function(err, docs) {
     if (err) throw err;
  
     res.send(docs);
   });
});

const port = 3000;
app.listen(port, function() {
    console.log(`Express.js server running on port ${port}`);
});
  
