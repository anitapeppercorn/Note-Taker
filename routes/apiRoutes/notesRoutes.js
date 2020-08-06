const router = require('express').Router();
const { filterByQuery, findById, createNewNotes, validateNotes } = require('../../lib/notes');
const notes = require('../../db/notes.json');
console.log(notes);
//const { notes } = require('../../db/notes');
 
/*router.get('/notes', (req, res) => {
   let results = notes;
   if (req.query) {
       results = filterByQuery(req.query, results);
   }
   res.json(results);
});*/


router.get('/notes/:id', (req, res) => {
   const result = findById(req.params.id, notes);
   if (result) {
       res.json(result);
   } else {
       res.sendStatus(404);
   }
});
 
router.post('/notes', (req, res) => {
   //req.notes.id = notes.length.toString();
   req.notes.id = notes.length
 
   if (!validateNotes(req.notes)) {
       res.status(400).send('The note is not properly formatted.');
   } else {
       const note = createNewNotes(req.notes, notes);
       res.json(note);
   }
});
 
module.exports = router;