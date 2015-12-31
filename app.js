var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

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
    res.render('books',{
      title: 'Books',
      nav: [{
        Link: '/books',
        Text: 'Books'
      }, {
        Link: '/authors',
        Text: 'Authors'
      }],
      books: books 
    }); 
  });

bookRouter.route('/single')
  .get(function(req, res){
    res.send('Hello Single Book'); 
  });

app.use('/books', bookRouter);

app.get('/', function(req, res){
  res.render('index', {
    title: 'Hello from render', 
    nav: [{ 
      Link: '/books',
      Text: 'Books'
    }, {
      Link: '/authors',
      Text: 'Authors'
    }]
  });
});

app.get('/books', function(req, res){
  res.send('Hello books');
});

app.listen(port, function(err){
  console.log('running server on port ' + port);
});
