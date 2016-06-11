var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.send('Hola caracola'+2);
});

app.listen(3000,(_)=>{ console.info('se ha arrancado el servidor en el puerto 3000');
});
