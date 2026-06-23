#!/usr/bin/env node
console.log("Hello! Welcome to the note-taking app!\n");
// console.log(process.argv);

const note = process.argv[2];
const newNote = {
  id: Date.now(),
  note,
}
console.log('your new note', newNote)