#!/usr/bin/env node
console.log("Hello! Welcome to the note-taking app!");
// console.log(process.argv);

const note = process.argv[2];
const newNote = {
  id: new Date(Date.now()).toISOString().slice(0, 10),
  note,
}
console.log('your new note', newNote)