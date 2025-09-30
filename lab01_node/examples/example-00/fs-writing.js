/* example-00/fs-writing.js */

const fs = require('fs');

fs.writeFile("./output.txt", "Hello, world!\n", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log("File written successfully.");
});
