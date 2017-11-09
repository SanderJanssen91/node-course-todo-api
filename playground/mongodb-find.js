// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({completed: true}).toArray().then((documents) => {
  //   console.log('Completed tasks')
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })
  //
  // db.collection('Todos').find({completed: false}).toArray().then((documents) => {
  //   console.log('All Todos')
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })
  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('5a042f7cb7caee2fc892744c')
  // }).toArray().then((documents) => {
  //   console.log('Tasks by ID')
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })
  //
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  //     }, (err) => {
  //   console.log('Unable to count todos', err)
  // })

  db.collection('Users').find({name: 'Sem'}).toArray().then((documents) => {
    console.log('Users by name')
    console.log(JSON.stringify(documents, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users by name', err)
  })

  // db.close();
});
