const express = require('express');

const morgan = require('morgan');
const app = express();
const routes = require('./routes');
const PORT = 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));
app.use("/api", routes)


app.listen(PORT, () => console.log(`this server listening on ${PORT}`))