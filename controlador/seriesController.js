var mongoose = require('mongoose');
var SeriesEsquema  = mongoose.model('series');

exports.findAll= function(req, res) {
    SeriesEsquema.find(function(err, series) {
      if(err) return res.send(500,err.message);
      console.log('GET /seriesAll');
      res.status(200).json(series);
    });
}

exports.findById = function(req, res) {
    SeriesEsquema.findById(req.params.id,function(err, serie){
      if(err) return  res.send(500,err.message);
      console.log('GET /series/'+ req.params.id);
      res.status(200).json(serie);
    });
}

exports.add = function(req, res) {
  console.log('POST');
  console.log(req.body);

  var serie = new SeriesEsquema({
     titulo:    req.body.titulo,
     anio:     req.body.anio,
     pais:  req.body.pais,
     episodios:  req.body.episodios,
     genre:    req.body.genre,
     resumen:  req.body.resumen
 });
 serie.save(function(err, serie) {
     if(err) return res.status(500).send( err.message);
     res.status(200).json(serie);
 });
}

exports.update = function(req, res) {
    SeriesEsquema.findById(req.params.id, function(err, serie) {
        serie.titulo    = req.body.titulo;
        serie.anio      = req.body.anio;
        serie.pais      = req.body.pais;
        serie.episodios = req.body.episodios;
        serie.genre     = req.body.genre;
        serie.resumen   = req.body.resumen;

        serie.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).json(serie);
        });
    });
};

exports.delete = function(req, res) {
    SeriesEsquema.findById(req.params.id, function(err, serie) {
        serie.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};
