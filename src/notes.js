import { insert, readDB, writeDB } from "./database/db.js";

export const createNote = async (note) => {
  const newNote = { id: Date.now(), ...note };
  await insert(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const db = await readDB();
  return db.notes || [];
};

const updateNote = async (id, updatedFields) => {
  const db = await readDB();
  const noteIndex = db.notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  db.notes[noteIndex] = { ...db.notes[noteIndex], ...updatedFields };
  await writeDB(db);
  return db.notes[noteIndex];
};

export const findNotes = async (filter) => {
  const {notes} = await readDB();
  return notes.filter((note) => note.content.toLowerCase().includes(filter.toLowerCase()));
}

export const removeNote = async (id) => {
  const db = await readDB();
  const noteIndex = db.notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) {
    throw new Error(`Note with id ${id} not found`);
  }
  const removedNote = db.notes.splice(noteIndex, 1);
  await writeDB(db);
  return removedNote; // Return the removed note object for confirmation
};

export const cleanNotes = async () => {
  await writeDB({ notes: [] });
  return []; // Return the empty notes array for confirmation
};
