const express = require("express");
const routes = require('./routes/router')
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
