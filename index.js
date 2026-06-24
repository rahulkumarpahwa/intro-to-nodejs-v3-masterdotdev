#!/usr/bin/env node
import data, { util } from "./utils.js";
console.log("Hello! Welcome to the note-taking app!\n");
// console.log(process.argv);
util();

console.log("\n Data from utils.js file : ", data);

const note = process.argv[2];
const newNote = {
  id: Date.now(),
  note,
};
console.log("your new note", newNote);
