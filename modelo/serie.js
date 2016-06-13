var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    var SeriesEsquema = new Schema({
      titulo:    { type: String },
      anio:     { type: Number },
      pais:  { type: String },
      episodios:  { type: Number },
      genre:    { type: String, enum:
      ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
            },
      resumen:  { type: String }
    });
module.exports = mongoose.model('series', SeriesEsquema);
