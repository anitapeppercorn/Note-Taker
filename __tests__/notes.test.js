const fs = require('fs');
const {
   filterByQuery,
   findById,
   createNewNotes,
   validateNotes,
} = require('../lib/notes');
const { notes } = require('../data/notes');
 
jest.mock('fs');
 
 
 
test('creates an notes object', () => {
   const notes = createNewNotes(
       { title: "darlene", id: "jfdjslkfjs32"},
       notes
   );
 
   expect(notes.title).toBe("darlene");
   expect(notes.id).toBe("jfdjslkfjs32")
})
 
test('filters by query', () => {
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
 
   const updatedNotes = filterByQuery({ body: "gorilla"}, startingNotes)
 
   expect(updatedNotes.length).toEqual(1);
})
 
test('finds by id', () => {
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
 
   const result = findById('3', startingNotes);
 
   expect(result.title).toBe("Erica")
})
