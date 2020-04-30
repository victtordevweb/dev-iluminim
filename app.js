const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const session = require("express-session");

// Define APP
const app = express();

// Import Routers
const AdminRouter = require('./admin/AdminRouter');
const ScheduleRouter = require('./schedule/ScheduleRouter');

// Define Session
app.use(session({
    secret: "deviluminim", cookie: { maxAge: 30000000},
    saveUninitialized: true,
    resave: true
}))

app.use(express.json());
app.use(cors());

// View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.use('/', AdminRouter);
app.use('/', ScheduleRouter);

// Rota inicial
app.get('/', (req, res)=>{
    res.render('index', {className: 'home'});
});

const port = 3000;
app.listen(port, function(){
	console.log(`Servidor Online em http://localhost:${port}`);
});