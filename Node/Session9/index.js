const express= require("express");
const authController = require('./controllers/authController')

const app = express();
app.use(express.json());


app.use("/auth", authController)



app.listen(8585);

