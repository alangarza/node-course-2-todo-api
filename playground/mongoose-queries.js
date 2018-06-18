const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b248b9914ad8a13b2773df7';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// } 

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.')
//     }
//     console.log('Todos', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5b2478e408c7b208825c22a4';

User.findById(id).then((user)=> {
    if(!user) {
        return console.log('Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e);
});
