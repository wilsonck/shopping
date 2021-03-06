const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cookieParser())
app.use(session({
  secret: 'ShoppingCart',
  resave: true,
  cookie: { 
    secure: false 
  },
  saveUninitialized: false, 
}));

app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
 }));

//Rotas
const index = require('./src/routes/index');
const productsRoute = require('./src/routes/productsRoute');
const brandsRoute = require('./src/routes/brandsRoute');
const bagRoute = require('./src/routes/bagRoute');
const wishListRoute = require('./src/routes/wishListRoute');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

app.use('/', index);
app.use('/products', productsRoute);
app.use('/brands', brandsRoute);
app.use('/bag', bagRoute);
app.use('/wishlist', wishListRoute);

module.exports = app;