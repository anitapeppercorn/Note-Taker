const fs = require('fs');
const path = require('path');
 
function findById(id, notesArray) {
   const result = notesArray.filter(note => note.id === id)[0];
   return result;
};

/*
function allButId(id, notesArray) {
   const result = notesArray.filter(note => note.id === !id)[0];
   return result;
};

function overWritenote(notesArray) {
   fs.writeFileSync(
       path.join(__dirname, '../db/notes.json'),
       JSON.stringify(notesArray , null, 2)
   );
   //return notes;
};
*/ 

function createNewnote(body, notesArray) {
   const note = body;
   notesArray.push(note);
   fs.writeFileSync(
       path.join(__dirname, '../db/notes.json'),
       JSON.stringify(notesArray , null, 2)
   );
   return note;
};
 
function validatenote(note) {
   if (!note.title || typeof note.title !== 'string') {
       return false;
   }
   if (!note.text || typeof note.text !== 'string') {
       return false;
   }
   
   return true;
};
 
module.exports = {
   findById,

   /*
   allButId,
   overWritenote,
   */

   createNewnote,
   validatenote
};

/*
// Receives query parameter containing ID of the note to delete.
app.delete("/api/notes/:id", (req, res) => {
   let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); // reads db.json
   let noteID = savedNotes.filter(x=>x.id!=req.params.id) // returns route with all notes EXCEPT the ID we are deleting
   console.log("NOTE ID", noteID)
   console.log("REQ.PARAMS.ID", req.params.id)

   // writes all new notes to db.json
   fs.writeFileSync("./db/db.json", JSON.stringify(noteID), (err) => {
       if (err) throw err;
       console.log("error");
   });
   console.log("Your note has been deleted");
   return res.json(savedNotes);
});
*/