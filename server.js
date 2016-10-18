var express = require('express');

// Create our app
var app = express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    // call next to move on to next process once this one completes
    if (req.headers['x-forwarded-proto'] === 'http') {
      next();
    } else {
      console.log('hostname: ', req.hostname);
      console.log('url: ', req.url);
      res.redirect('http://' + req.hostname + req.url);
    }
});

app.use(express.static('public'));
app.listen(port, function() {
  console.log("Express server is listening at port " + port);
});
