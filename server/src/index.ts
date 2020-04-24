import express from 'express';
const app = express();

import indexRoutes from './routes/indexRoutes'

//middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // para poder tener datos de un html

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



app.use(indexRoutes);

app.listen(3000, () => {
    console.log('server on port ', 3000)
})