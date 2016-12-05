let express        = require("express");
let morgan         = require("morgan");
let path           = require('path');
let app            = express();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, 'dist')));
app.all('/*', function(req, res) { res.sendFile(path.join(__dirname, 'dist', 'index.html')); });
app.listen(17680);