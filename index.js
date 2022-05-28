const path = require('path');
const express = require('express');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const parentsRoute = require('./routes/parentsRoute')
const kidsRoute = require('./routes/kidsRoute')

const app = express();
app.use('/images', express.static(path.join(__dirname, 'public/img')));

app.use(cors())
app.use(
    '/css',
    express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css'))
);

app.use(express.json({ limit: '10kb' }));

app.use('/api/v1/parents', parentsRoute);
app.use('/api/v1/kids', kidsRoute);

app.all('*', (req, res, next) => {
    next(
        new AppError(`Cant find this url ${req.originalUrl} on the server!`, 404)
    );
});

app.use(globalErrorHandler);
module.exports = app;


