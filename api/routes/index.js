var express = require('express');
var router = express.Router();

//routes kalsörüne bir dosya eklendiğinde dinamik olarak 
// app.js dosyasına tanımlama yaptırmak istiyoruz

const fs = require("fs"); //nodejs kütüphanesinde otomatik olarak geliyor

let routes = fs.readdirSync(__dirname);

for(let route of routes){
  if (route.includes(".js") && route != "index.js"){
    router.use("/" + route.replace(".js", ""), require('./' +route));
  }
}


module.exports = router;
