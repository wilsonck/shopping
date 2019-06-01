const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
app.use(session({
  secret: '#$WilsonVai%&',
  resave: false
}));



const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const productsRoute = require('./routes/productsRoute');
const brandsRoute = require('./routes/brandsRoute');
const bagRoute = require('./routes/bagRoute');
const wishListRoute = require('./routes/wishListRoute');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use('/', index);
app.use('/person', personRoute);
app.use('/products', productsRoute);
app.use('/brands', brandsRoute);
app.use('/bag', bagRoute);
app.use('/wishlist', wishListRoute);

module.exports = app;