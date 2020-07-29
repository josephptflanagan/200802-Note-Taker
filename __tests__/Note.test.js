const fs = require("fs");
const { createNewNote} = require("../lib/Note");
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
