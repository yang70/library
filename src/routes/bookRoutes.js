var express = require('express');

var bookRouter = express.Router();

var router = function(nav){

  var books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace 2',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'War and Peace 3',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }
  ];

  bookRouter.route('/')
    .get(function(req, res){
      res.render('bookListView',{
        title: 'Books',
        nav: nav,
        books: books 
      }); 
    });

  bookRouter.route('/:id')
    .get(function(req, res){
      var id = req.params.id;
      res.render('bookView',{
        title: 'Book',
        nav: nav,
        book: books[id] 
      }); 
    });   

    return bookRouter;
}

module.exports = router;
