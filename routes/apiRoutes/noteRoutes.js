const router = require('express').Router();
const { notes } = require('../../data/db.json');
const { createNewNote, deleteNote, findIndexById } = require('../../lib/Note');

//gets the database and returns it
router.get('/notes', (req, res) => {

    let results = notes;
    res.json(results);

});

//takes user input, passes it to the Note.js file which creates a new note object, this then passes that new object on the database
router.post('/notes', (req, res)=>{

    //makes sure the id for each note is unique
    let highestID = notes[notes.length-1].id;

    //gives the user provided data its unique id
    req.body.id = (parseInt(highestID) + 1).toString();

    //creates the new note
    const note = createNewNote(req.body, notes);

    //passes the new note to the database
    res.json(note);

});

//takes the delete button input, finds the index of the item that is to be deleted within the data base based on it's id and deletes that item
router.delete('/notes/:id', (req, res) => {

    let results = notes;

    //finds the index of the item to be deleted by id
    const index = findIndexById(req.params.id, notes);

    //console.log('delete called on index: ',index);

    //checks if there is indeed an item in question
    if (index || index == '0'){
        //deletes the item based on it's index within the database
        deleteNote(index,notes);
        //sends the updated database to the deleter to update the HTML page
        res.json(results);
    } else {
        res.sendStatus(404);
    }

});

//exports these functions to the api router index function
module.exports = router;