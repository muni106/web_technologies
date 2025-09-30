const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Carico il template EJS
    fs.readFile("./views/page.ejs", "utf-8", (err, template) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading template");
        return;
      }

      // Dati da passare al template
      const data = {
        name: "Manuel",
        date: new Date().toDateString(),
      };

      // Rendering
      const html = ejs.render(template, data);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  } else if (req.url.startsWith("/numbers")) {
    fs.readFile("./views/numbers.ejs", "utf-8", (err, template) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading template");
        return;
      }

      const n = req.url.split("/").slice(2).map(Number).filter(n => !isNaN(n));
      const numbers = Array.from({ length: n }, (_, i) => i + 1);

      // Rendering
      const html = ejs.render(template, { numeri: numbers });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
