var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Store = require('./api/models/storeModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Storedb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/storeRoutes');
routes(app);

// a middleware interception in case of not defined route
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.listen(port);
