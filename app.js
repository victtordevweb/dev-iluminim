const express = require('express');
const cors = require('cors');
const panelController = require('./panel/PanelController');

// Define APP
const app = express();

app.use(express.json());
app.use(cors());

// View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static("public"));

// Rotas
app.use('/', panelController);

const port = port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log(`Servidor Online em http://localhost:${port}`);
});