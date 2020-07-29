const fs = require("fs");
const { createNewNote, findIndexById, deleteNote} = require("../lib/Note");
const { notes } = require("../data/db.json");

jest.mock('fs');

test('creates a new note object', () => {

    const note = createNewNote(
        {title: "Build Note Taker", 
         text: "Use starter code and express.js", 
         id: "q47"},
        notes
    );

    expect(note.title).toBe("Build Note Taker");
    expect(note.text).toBe("Use starter code and express.js");
    expect(note.id).toBe("q47");

})

test('tests findIndexById function', () => {

    const index = findIndexById("test_id", notes)

    expect(index).toBe(0);

})

test('tests deleteNote function', () => {

    const note = createNewNote(
        {title: "Test Note Taker Delete", 
         text: "use this test function", 
         id: "q48"},
        notes
    );

    expect(notes.length).toBe(3);

    deleteNote("q48", notes);

    expect(notes.length).toBe(2);

})
