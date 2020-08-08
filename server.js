const express = require('express');
//const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
//not sure if the next line is even needed
app.use('/notes', htmlRoutes);
app.use('/api', apiRoutes);
app.use(express.static('public'));


 
app.listen(PORT, () => {
   console.log(`API server now on port ${PORT}!`);
});
