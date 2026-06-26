import fs from "fs/promises";

// Function to read and parse a JSON file
const readPJson = async (filePath) => {
    const path = new URL(filePath, import.meta.url);
  const data = await fs.readFile(path, "utf-8");
  return JSON.parse(data);
};

// Example usage of readPJson function
readPJson("./package.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error reading package.json:", err);
  });

// writeFile function to write content to a file
const writeFile = async (filePath, content) => {
  const path = new URL(filePath, import.meta.url);
  await fs.writeFile(path, content, "utf-8");
};

writeFile("./output.txt", "Hello, World!")
  .then(() => {
    console.log("File written successfully.");
  })
  .catch((err) => {
    console.error("Error writing to file:", err);
  });
