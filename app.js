var Express = require('express');
var app = new Express();

app.use(Express.static('public'));

app.post('/something-heavy-responce', function(req, res) {
  console.log('responce start');
  setTimeout(function() {
    console.log('responce finish');
    res.send('Hey!');
  }, 5000);
});

app.listen(8080);
