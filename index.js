var Twit = require('twit')
var express = require('express')
var app = express()
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

var T = new Twit({
  consumer_key:         'QnLFzUyAUAmlUe5xcN11tbxLL',
  consumer_secret:      'Q2ffUrLmj8hgyyYLlP0thuoXXaiuWXl9s5DQqlm47ByuiGecZa',
  access_token:         '2402049930-BKzuYbRdqCNjvPVNWgoEhKDXTKKS6G0nkRUXhim',
  access_token_secret:  'CH08Qfz1MnxVCizsqUnZfuBLEx4fnRkURa88DJnuu8g1H',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


// respond with "hello world" when a GET request is made to the homepage
app.get('search/:word', function (req, res) {
  T.get('search/tweets', { q: '#'+req.params.word, count: 100 }, function(err, data, response) {
    res.jsonp(data)
  })
})


//
//  tweet 'hello world!'
//
app.listen(process.env.PORT || 3000)
