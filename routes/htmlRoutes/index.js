const path = require('path');
const router = require('express').Router();
 
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
});
 
router.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
 
 /*
//returns notes.html file
app.get("/notes", (req, res) => {
   res.sendFile(path.join(__dirname, "/public/notes.html"));
});
 
// returns index.html file
app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "/public/index.html"));
});
*/




module.exports = router;