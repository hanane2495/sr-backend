const express = require('express');//pour faire les http requests et responses
const bodyParser = require('body-parser');//pour faire la transformation des differents resultat en format json
const morgan = require('morgan');//permet d'accéder à l’objet Request (req), l’objet response (res) et à la fonction middleware suivant dans le cycle demande-réponse de l’application
const cors = require('cors')
const port = process.env.PORT || 5000;

const app = express();

//Middlewares
//auth.use(express.bodyParser());
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

//Routes (http://localhost:5000/users/signIn or signUp or profile).
var Users = require('./routes/users')
app.use('/users', Users);

//Routes (http://localhost:5000/lieux/hotels or restaurants or plages etc)
var Lieux = require('./routes/lieux')
app.use('/lieux', Lieux);

//Routes (http://localhost:5000/admin/dashbord or login)
var Admin = require('./routes/admin')
app.use('/admin', Admin);

var recommandation = require('./routes/recommandation')
app.use('/recommandation', recommandation);

//Start the server

app.listen(port);
console.log('server is listening at '+port);