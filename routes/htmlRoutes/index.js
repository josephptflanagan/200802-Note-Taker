const path = require('path');
const router = require('express').Router();

//provides the root directory when requested
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//provides the notes page when requested
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//exports the functionality back to the server
module.exports = router;