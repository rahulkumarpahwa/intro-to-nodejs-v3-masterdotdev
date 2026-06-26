import express from "express";

const app = express();
app.use(express.json());


app.get("/health", (req, res) => {
  res.send("Hello, World!");
});

app.get("/", async (req, res) => {
  const notes = await getAllNotes();
  res.json(notes);
});

// app.post("/notes", async (req, res) => {
//   const note = req.body;
//   const newNote = await createNote(note);
//   res.status(201).json(newNote);
// });


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
})