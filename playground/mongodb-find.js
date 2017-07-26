//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5944ca1cd32ca65ccccb229c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: `, count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Users').find({
  //   name: 'Andrew'
  // }).toArray().then((docs) => {
  //   console.log(`Todos: `);
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('User').find().toArray().then((docs) => {
    console.log(docs);
  });

  //db.close();
});
