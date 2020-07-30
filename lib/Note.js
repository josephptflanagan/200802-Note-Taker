const fs = require("fs");
const path = require("path");

//creates a new note and adds it to the database
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

//takes a data object's id and returns that object's index within the database
function findIndexById(id, notesArray) {

    const value = notesArray.filter(note => note.id === id)[0];
    const index = notesArray.indexOf(value);

    return index;
    
}
//takes in the index of the data object you want to delete, removes it from a copy of the database, then replaces the database with the edited copy
function deleteNote(index, notesArray) {

    //console.log('deleteNote, passed index: ',index);

    if (index == 0) {
        notesArray.shift();
    }
    else {
        notesArray.splice(index, 1);
    }    

    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

}
//exports these functions back to be used externally
module.exports = {createNewNote, deleteNote, findIndexById};