const router = require('express').Router();
const { notes } = require('../../data/db.json');

const { createNewNote, deleteNote, findIndexById } = require('../../lib/Note');

router.get('/notes', (req, res) => {

    let results = notes;
    res.json(results);

});

router.post('/notes', (req, res)=>{
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note);

});

router.delete('/notes/:id', (req, res) => {

    const index = findIndexById(req.params.id, notes);

    if (index){
        deleteNote(index,notes) 
    } else {
        res.sendStatus(404);
    }

});

module.exports = router;