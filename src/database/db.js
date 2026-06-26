import fs from "node:fs/promises";

const DB_PATH = new URL("./db.json", import.meta.url).pathname; // Get the absolute path to db.json file

// Function to read and parse the db.json file
export const readDB = async () => {
  const data = await fs.readFile(DB_PATH, "utf-8");
  // Note: By default fs.readFile returns a Buffer object with uninterpreted binary data if you don't specify an encoding. This is useful if we want to read things like images or PDFs. You can pass "utf-8" to tell fs to interpret the file as text.
  return JSON.parse(data); // Return the parsed JSON data
};

export const writeDB = async (data) => {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8"); // Write the data back to db.json with pretty formatting
  return data;
};

export const insert = async (data) => {
  const db = await readDB();   // Read the current database
    db.notes.push(data); // Add the new note to the notes array
    await writeDB(db); // Write the updated database back to db.json
    return data;
};