const router = require('express').Router();
const { findById, createNewnote, validatenote } = require('../../lib/notes');
const notes = require('../../db/notes.json');
console.log(notes);
 
router.get('/notes/:id', (req, res) => {
//router.get('/notes', (req, res) => {
   const result = findById(req.params.id, notes);
   if (result) {
       res.json(result);
       console.log(result);
   } else {
       res.sendStatus(404);
   }
});


router.post('/notes', (req, res) => {
 
   if (!validatenote(req.body)) {
       res.status(400).send('The note is not properly formatted.');
   } else {
    const result = createNewnote(req.body, notes);
    req.body.id = notes.length.toString();
       res.json(result);
       console.log(result);
   }
});
 
module.exports = router;


