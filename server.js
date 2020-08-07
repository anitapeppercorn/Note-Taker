const express = require('express');
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
//not sure if the next line is even needed
app.use('/notes', htmlRoutes);
app.use('/api', apiRoutes);
app.use(express.static('public'));



// Receives query parameter containing ID of the note to delete.
app.delete("/api/notes/:id", (req, res) => {
   let savedNotes = JSON.parse(fs.readFileSync("./db/notes.json", "utf8")); // reads db.json
   let noteID = savedNotes.filter(x=>x.id!=req.params.id) // returns route with all notes EXCEPT the ID we are deleting
   console.log("NOTE ID", noteID)
   console.log("REQ.PARAMS.ID", req.params.id)

   // writes all new notes to notes.json
   fs.writeFileSync("./db/notes.json", JSON.stringify(noteID), (err) => {
       if (err) throw err;
       console.log("error");
   });
   console.log("Your note has been deleted");
   return res.json(savedNotes);
});



 
app.listen(PORT, () => {
   console.log(`API server now on port ${PORT}!`);
});
