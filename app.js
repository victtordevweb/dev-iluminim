const express = require('express');
const consign = require('consign');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());


// Rotas
consign().include('routes').into(app);

const port = 5051;
app.listen(port, function(){
	console.log(`Servidor Online em http://localhost:${port}`);
});