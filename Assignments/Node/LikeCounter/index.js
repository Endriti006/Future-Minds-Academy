const express = require('express');
const LikeController = require('./controllers/LikeController');

const app = express();

app.use('/likes', LikeController);

app.listen(8585, () => {
    console.log('Server is running on port 8585');
});
