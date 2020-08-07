const router = require('express').Router();
//const noteRoutes = require('./noteRoutes');
const noteRoutes = require('../apiRoutes/noteRoutes');
router.use(noteRoutes);
 
module.exports = router;