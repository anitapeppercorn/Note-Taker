const fs = require('fs');
//   filterByQuery,
const {
   findById,
   createNewNotes,
   validateNotes,
} = require('../lib/notes');
const { notes } = require('../db/notes');
 
jest.mock('fs');
 
 
 
test('creates an notes object', () => {
   const notes = createNewNotes(
       { title: "darlene", text: "text", id: "jfdjslkfjs32"},
       notes
   );
 
   expect(notes.title).toBe("darlene");
   expect(notes.id).toBe("jfdjslkfjs32")
   expect(notes.text).toBe("text");
})
 
/*test('filters by query', () => {
   const startingNotes = [
       {
           id:'3',
           title: 'Erica',
           body: 'gorilla',
       },
       {
           id: '4',
           title: "noel",
           body: 'bear',
       },
   ];
 
   const updatedNotes = filterByQuery({ text: "gorilla"}, startingNotes)
 
   expect(updatedNotes.length).toEqual(1);
})*/
 
test('finds by id', () => {
   const startingNotes = [
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
 
   const result = findById('3', startingNotes);
 
   expect(result.title).toBe("Erica")
})
