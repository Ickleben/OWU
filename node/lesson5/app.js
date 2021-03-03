const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { apiRouter } = require('./router');
const { MONGO_DB } = require('./configuration/configuration');

const app = express();

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('App listen 5000');
});

function _connectDB() {
    mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
