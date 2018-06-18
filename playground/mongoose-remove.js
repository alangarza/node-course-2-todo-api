const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})

// Todo.remove({}).then((result)=> {
//     console.log(result)
// });

Todo.findByIdAndRemove('5b27ccb3022aa393d88ab57a').then((todo)=>{
    console.log(todo);
});