const express = require('express');
const app = express();
const path = require('path');

/**/
app.use(express.static("public"));

/* Rutas */
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/src/home.html"));
})
app.get("/crearCuenta", function(req, res) {
	res.sendFile(path.join(__dirname, "/src/register.html"));
})
app.get("/ingresar", function(req, res) {
	res.sendFile(path.join(__dirname, "/src/login.html"));
})

/* Levantando el Servidor */
app.listen(3000, ()=>{
    console.log("Servidor corriendo")
})