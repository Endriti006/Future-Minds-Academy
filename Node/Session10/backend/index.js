const express = require('express');
const cors = require("cors")
const bookController = require('./controllers/bookController')
const authController = require('./controllers/authController')
const app = express();

app.use(
  cors({
    origin:'http://localhost:3000',
    preflightContiune:true,
  }),
)

app.use('/books', bookController)
app.use('/auth',authController)

// Start the server
app.listen(8585, () => {
  console.log('Server is running on port 8585');
});
