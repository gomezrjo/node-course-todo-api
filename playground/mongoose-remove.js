const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a2078dd28333851e77ace31'}).then(() => {

});

Todo.findByIdAndRemove('5a2078dd28333851e77ace31').then((todo) => {
  console.log(todo);
});
