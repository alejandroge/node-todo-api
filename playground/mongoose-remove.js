const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
    console.log(result);
});*/

Todo.findOneAndRemove({_id: '5a11062cdb2a63105cf49b87'}).then((todo) => {
    console.log(todo);
});

/*Todo.findByIdAndRemove('5a1105eba94daa855b9e66aa').then((todo) => {
    console.log(todo);
});*/