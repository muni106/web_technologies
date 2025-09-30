const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Homepage
    fs.readFile("./views/index.ejs", "utf-8", (err, template) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error loading template");
          return;
        }
        // Dati da passare al template
      const data = {
        name: "muni",
        date: new Date().toDateString(),
      };

      // Rendering
      const html = ejs.render(template, data);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
      }
    ) 
  } else if (req.url === "/users") {
    // Lista utenti
    const users = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 28 },
    ];

    
// IMPLEMENTATION HERE
  } else if (req.url === "/products") {
    // Catalogo prodotti
    const products = [
      { name: "Laptop", price: 1200, available: true },
      { name: "Mouse", price: 25, available: true },
      { name: "Monitor", price: 180, available: false },
      { name: "Tastiera", price: 70, available: true },
    ];
// IMPLEMENTATION HERE
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

// IMPLEMENTATION HERE
