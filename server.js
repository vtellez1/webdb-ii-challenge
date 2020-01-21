const express = require('express');

const CarsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());

server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.send('<h3> Web DB II Challenge </h3>');
});

server.use((err, req, res) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong."
    });
});

