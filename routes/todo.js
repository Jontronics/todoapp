const express = require('express');
const router = express.Router();

const knex = require('../db/knex');  


/* This router points to http://localhost:3000/todo. */
router.get('/', (req, res) => {
  knex('todo')
    .select()
    .then(todos => {
      res.render('all', { todos: todos });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined') {
    knex('todo')
      .select()
      .where('id', id)
      .first()
      .then(todo => {
        console.log('todo', todo);
        res.render('single', todo);
      });
    
  } else {
    //respond with an error
    res.status(500)
    res.render('error', {
      message: 'Invalid id'
    });
  }
  
});

router.get('/new', (req, res) => {
      res.render('new');  
});

router.get('/todo/:id/edit', (req, res) => {
      res.render('edit');
});

 function validTodo(todo) {
   return typeof todo.title == 'string' &&
            todo.title.trim() != '' && 
            typeof todo.priority != 'undefined' && !isNaN(Number(todo.priority));
 }

router.post('/', (req, res) => {
  console.log(req.body);
      if(validTodo(req.body)){
        // insert to the datbase
        const todo = {
          title: req.body.title,
          description: req.body.description,
          priority: req.body.priority,
          date:new date()
        };
        
        knex('todo')
          .insert(todo, 'id')
          .then(todos => {
            const id = ids[0];
            res.redirect(`/todo/${id}`);
          });
        
      } else {
        //respond with an error
        res.status(500)
        res.render('error', {
          message: 'Invalid'
        });
      }
});

module.exports = router;
