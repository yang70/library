var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
var nav = [{
        Link: '/books',
        Text: 'Books'
      }, {
        Link: '/authors',
        Text: 'Authors'
      }]
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');


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
