const express = require('express');
const app = express();
const cors = require('cors');
const Getconn = require('./controller/connexionDb');
const api = process.env.API_URL;


app.use(express.json());
app.use(cors());
app.use(errorHandler);

//connexionDb
Getconn.getConn();

//Routes
const usersRoutes = require('./routes/userRoute');
app.use(`${api}/users`, usersRoutes);

//Server
app.listen(process.env.PORT || 3000, () => {

    console.log('server is running http://localhost:3000');
})