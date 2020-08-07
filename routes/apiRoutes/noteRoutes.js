const router = require('express').Router();
const { findById, /* allButId, overWritenote,*/ createNewnote, validatenote } = require('../../lib/notes.js');
const notes = require('../../db/notes.json');
console.log(notes);
 
router.get('/notes/:id', (req, res) => {
   const result = findById(req.params.id, notes);
   if (result) {
       res.json(result);
       console.log(result);
   } else {
       res.sendStatus(404);
       console.log("problem in GET by ID noteRoute.js");
   }
});

router.get('/notes', (req, res) => {
       if (notes) {
           res.json(notes);
           console.log(notes);
       } else {
           res.sendStatus(404);
           console.log("problem in GET noteRoute.js");
       }
    });


router.post('/notes', (req, res) => { 
   if (!validatenote(req.body)) {
       res.status(400).send('The note to POST is not properly formatted.');
   } else {
    req.body.id = notes.length.toString();
    const result = createNewnote(req.body, notes);
       res.json(result);
       console.log(result);
   }
});

/*router.delete('/notes/:id', (req, res) => {
       const result = allButId(req.params.id, notes);
       if (result) {
           res.json(result);
           console.log(result);
           overWritenote(result);
           console.log("REQ.PARAMS.ID", req.params.id)
  
       } else {
           res.sendStatus(404);
           console.log("problem in DELETE noteRoute.js");
       }
    });
*/
module.exports = router;


