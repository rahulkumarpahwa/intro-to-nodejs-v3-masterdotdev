import express from "express";
import { getAllNotes } from "./notes.js";
import open from "open";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.send("Hello, World!");
});

app.get("/", async (req, res) => {
  const notes = await getAllNotes();
  res.setHeader("Content-Type", "text/plain");
  res.json(notes);
});

// app.post("/notes", async (req, res) => {
//   const note = req.body;
//   const newNote = await createNote(note);
//   res.status(201).json(newNote);
// });

export const setServerPort = (PORT) => {
  app.listen(PORT, async () => {
    console.log(`Server running at http://localhost:${PORT}`);

    await open(`http://localhost:${PORT}`);
  });
};
