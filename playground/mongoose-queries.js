const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a0599c968620904231b641a11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo)
// }).catch((e) => {
//   console.log(e);
// })

var id = '5a0478137143b65810872125';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid')
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log(`User with ID ${id} not found`);
  }
  console.log('User by ID', JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e);
});
