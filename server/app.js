var cors = require('cors');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(session({
  secret: '#$ShoppingCart%&',
  resave: false
}));

//Rotas
const index = require('./src/routes/index');
const personRoute = require('./src/routes/personRoute');
const productsRoute = require('./src/routes/productsRoute');
const brandsRoute = require('./src/routes/brandsRoute');
const bagRoute = require('./src/routes/bagRoute');
const wishListRoute = require('./src/routes/wishListRoute');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.use('/', index);
app.use('/person', personRoute);
app.use('/products', productsRoute);
app.use('/brands', brandsRoute);
app.use('/bag', bagRoute);
app.use('/wishlist', wishListRoute);

module.exports = app;