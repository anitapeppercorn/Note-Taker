const router = require('express').Router();
const { allButId, overWritenote, createNewnote, validatenote } = require('../../lib/notes.js');
const notes = require('../../db/notes.json');
console.log(notes);
 
router.get('/notes', (req, res) => {
       if (notes) {
           res.json(notes);
           console.log("get /notes");
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
    req.body.id = (0 + ((new Date()).getTime()))+'';
    //req.body.id = body.length.toString();
    const result = createNewnote(req.body, notes);
       res.json(result);
       console.log("post /notes");
       console.log(result);
   }
});


router.delete('/notes/:id', (req, res) => {
    const result = {
        message: 'There was an error processing your request',
        status: 'ERROR',
        status_code: 500
    };
    
    if (req.params.id) {
        result.deleted_note = req.params.id;
        const newNotes = allButId(req.params.id, notes);
        const output = overWritenote(newNotes);
        result.message = `Note ${req.params.id} was deleted`;
        result.status = 'OK';
        result.status_code = 200;
        result.remaining_notes = newNotes;
        console.log("New Note Content", output);
        console.log("Deleted Note ID", result);
        //res.json(output);
        console.log("delete and update notes");
    } else {
        res.sendStatus(404);
        console.log("problem in DELETE noteRoute.js");
    }
    res.json(result);
});

module.exports = router;


