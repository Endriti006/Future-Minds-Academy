const express = require('express');
const cors = require("cors")
const bookController = require('./controllers/bookController')
const app = express();

app.use(
  cors({
    origin:'http://localhost:3000',
    preflightContiune:true,
  }),
)

app.use('/books', bookController)

// Start the server
app.listen(8585, () => {
  console.log('Server is running on port 8585');
});
