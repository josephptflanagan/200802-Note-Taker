const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

//provides a route from this router file to the noteRoutes file
router.use(noteRoutes);

//exports the functionality of the noteRoutes
module.exports = router;