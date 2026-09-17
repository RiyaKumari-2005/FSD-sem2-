const fs = require("fs");

const fileName = "example.txt";

// 1. CREATE - Create a new file
fs.writeFileSync(fileName, "Hello, this is my first file!");
console.log("File created successfully.");

// 2. READ - Read the file
const data = fs.readFileSync(fileName, "utf8");
console.log("File content:", data);

// 3. UPDATE - Add new content to the file
fs.appendFileSync(fileName, "\nThis is updated content.");
console.log("File updated successfully.");

// Read updated content
const updatedData = fs.readFileSync(fileName, "utf8");
console.log("Updated content:", updatedData);

// 4. DELETE - Delete the file
fs.unlinkSync(fileName);
console.log("File deleted successfully.");
