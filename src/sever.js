const express = require("express");
const express = require("path");

const app = express();

app.use(express.static(__dirname+"dist/spa-angular"));
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname+"dist/spa-angular/index.html"));
});

app.listen(process.env.PORT || 8000, function(){
console.log("conectado");

});

