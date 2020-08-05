const fs = require('fs');
const path = require('path');

function createNotes(notes, notesArray) {
    // push note into notesArray
    notesArray.push(notes);

    // write the updated value of the notesArray to the database
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return notes;
}

function deleteNotes(id, notesArray) {
    // filter out the note with the matching id
    notesArray = notesArray.filter(notes => {
        if (notes.id !== id) {
            return notes;
        }
    });

    // write the updated value of the notesArray to the database
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return notesArray;
}

module.exports = {
    createNotes,
    deleteNotes
}