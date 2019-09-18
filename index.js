var express = require('express');
var app = express();
const PORT = 3000;
const router = express.Router();
app.get('/', function(req, res) {
    res.send('Hola mundo desde el sena');
});

app.listen(3000, function() {
    console.log(`Server running at port ${PORT}`);
});

app.get('/about', function(req, res) {
    res.send('about')
})

app.route('/book')
    .get(function(req, res) {
        res.send('Get a random book')
    })
    .post(function(req, res) {
        res.send('Add a book')
    })
    .put(function(req, res) {
        res.json({ user: 'tobi' })
    })