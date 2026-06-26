import { jest } from "@jest/globals";

jest.unstable_mockModule("../src/database/db.js", () => ({
  // Mock the database module to avoid actual file I/O during tests
  insert: jest.fn(), // Mock the insert function to track calls and arguments
  readDB: jest.fn(), // Mock the readDB function to track calls and arguments
  writeDB: jest.fn(), // Mock the writeDB function to track calls and arguments
}));

const { insert, readDB, writeDB } = await import("../src/database/db.js"); // Import the mocked functions from the database module
const { createNote, getAllNotes, removeNote } = await import("../src/notes.js"); // Import the functions to be tested from the notes module

beforeEach(() => {
  insert.mockClear();
  readDB.mockClear();
  writeDB.mockClear();
});

describe("Notes CLI", () => { // Test suite for the Notes CLI functionality
  // Test suite for the insert function
  test("call insert and return the new note", async () => {
    const note = {
      content: "Test note",
      tags: ["test1", "test2"],
      id: 1,
    }; // Define a sample note object
    insert.mockResolvedValue(note); // Check if the insert function was called with the new note object
    const newNote = await insert(note); // Call the insert function with the sample note

    expect(newNote).toHaveProperty("id"); // Check if the new note has an 'id' property
    expect(newNote).toHaveProperty("content", note.content); // Check if the new note has the same content as the original note
    expect(newNote).toHaveProperty("tags", note.tags); // Check if the new note has the same tags as the original note

    expect(newNote.content).toEqual(note.content); // Check if the content of the new note matches the original note
    expect(newNote.tags).toEqual(note.tags); // Check if the tags of the new note match the original note
    expect(newNote).toEqual(note); // Check if the content of the new note matches the original note
  });

  // Test suite for the getAllNotes function
  test("getAllNotes returns all notes", async () => {
    const db = {
      notes: ["note1", "note2", "note3"],
    };
    readDB.mockResolvedValue(db);

    const result = await getAllNotes();
    expect(result).toEqual(db.notes); // Check if the result matches the notes in the mocked database
  });
});
