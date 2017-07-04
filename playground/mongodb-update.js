//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('595ad34b3541ab1c43edfcad')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('595aa29c923bbd116bbd9d53')
  }, {
    $inc: {
      age: 3
    },
    $set: {
      name: 'Andrew'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  //db.close();
});
