const express = require('express');
const bookController = require('./controllers/bookController')
const app = express();

app.use('/books', bookController)

// Start the server
app.listen(8585, () => {
  console.log('Server is running on port 8585');
});
