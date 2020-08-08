# Note Taker Starter Code
This project creates an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end is predefined. I have built the back end, connected the two, and then deployed the entire application to Heroku at:
https://sheltered-temple-82689.herokuapp.com/notes

![license](https://img.shields.io/badge/License-MIT-blue)

This application is deployed to github at:
https://github.com/anitapeppercorn/Note-Taker

![Badge](https://img.shields.io/badge/Github-anitapeppercorn-4cbbb9) 
![Profile Image](https://github.com/anitapeppercorn.png?size=50)

View the author's portfolio at:  https://anitapeppercorn.github.io/anitaprofileportfolio/

![GIF of app running on Heroku](/doc/app.gif)
![image of app](/doc/app-image.png)

### User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
### Acceptance Criteria
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
### Mock-Up
The following images show the web application's appearance and functionality:

Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.

Notes titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.

### Getting Started
The application has a db.json file on the back end that will be used to store and retrieve notes using the fs module.

### The following HTML routes are created:

1. GET /notes should return the notes.html file.
2. GET * should return the index.html file.

The following API routes should be created:
1. GET /api/notes should read the db.json file and return all saved notes as JSON.
2. POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. We give each note a unique id when it's saved ( used the currentdate and time to do this).

### Bonus
DELETE route to the application using the following guideline:

DELETE /api/notes/:id receives a query parameter containing the id of a note to delete. In order to delete a note, we read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

### Grading Requirements
This Challenge is graded based on the following criteria:

#### Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

1. Application front end must connect to an Express.js back end.
2. Application back end must store notes with unique IDs in a JSON file
3. Application must be deployed to Heroku.

#### Deployment: 36%
1. Application deployed at live URL.
2. Application loads with no errors.
3. Application GitHub URL submitted.
4. GitHub repository contains application code.

#### Application Quality: 11%
Application console is free of errors.
#### Repository Quality: 13%
Repository has a unique name.
Repository follows best practices for file structure and naming conventions.
Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
Repository contains multiple descriptive commit messages.
Repository contains quality README file with description, screenshot, and link to deployed application.

#### How to Submit the Challenge
You are required to submit BOTH of the following for review:
The URL of the functional, deployed application.
The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.