const fs = require('fs');
const {
   findById,
   createNewnote,
   validatenote,
} = require('../lib/notes');
const { notes } = require('../db/notes');
 
jest.mock('fs');
 
 
 
test('creates an note object', () => {
   const note = createNewnote(
       { title: "darlene", id: "jfdjslkfjs32"},
       notes
   );
 
   expect(note.title).toBe("darlene");
   expect(note.id).toBe("jfdjslkfjs32")
})
 
 
test('finds by id', () => {
   const startingnotes = [
       {
           id:'3',
           title: 'Erica',
           text: 'gorilla',
       },
       {
           id: '4',
           title: "noel",
           text: 'bear',
 
       },
   ];
 
   const result = findById('3', startingnotes);
 
   expect(result.title).toBe("Erica")
})
 
test('validates personality traits', () => {
   const note = {
       id:'3',
       title: 'Erica',
       text: 'gorilla',
   };
 
   const invalidnote = {
       id: "3",
       title: "Erica",
 
   };
 
   const result = validatenote(note);
   const result2 = validatenote(invalidnote);
 
   expect(result).toBe(true);
   expect(result2).toBe(false);
})
