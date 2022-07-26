const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')

const routes = require('./routes/router')
const authRoute = require('./routes/auth');

const session = require('express-session');
const { passport } = require("./controllers/authentication");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(cors());

app.use(session({
  secret: "ecommerce",
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
