var express = require('express'),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose'),
    models     = require('./modelo/serie')(app, mongoose), // Esto es para cargar el modelo
    SeriesControlador = require('./controlador/seriesController');
    ;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hola mundo!");
});

app.use(router);

var series = express.Router();
series.route('/series')
  .get(SeriesControlador.findAll)
  .post(SeriesControlador.add);
series.route('/series/:id')
  .get(SeriesControlador.findById)
  .put(SeriesControlador.update)
  .delete(SeriesControlador.delete);
app.use("/api",series);

mongoose.connect('mongodb://localhost/series', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});
