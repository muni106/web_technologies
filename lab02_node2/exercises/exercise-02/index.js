const express = require("express");
const app = express();
const PORT = 3000;
let movies = require("./movies.json");

// Middleware per leggere JSON dal body
app.use(express.json());

// GET /movies - lista di tutti i film
app.get("/movies", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(movies))
});

// GET /movies/:id - dettagli di un film
app.get("/movies/:id", (req, res) => {
  movieId = req.params.id
  res.json (movies.find(movie => movie.id == movieId) || 'scherzetto');
});

// POST /movies - aggiungi un nuovo film
app.post("/movies", (req, res) => {

});

// PUT /movies/:id - aggiorna un film
app.put("/movies/:id", (req, res) => {
// IMPLEMENTATION HERE
});

// DELETE /movies/:id - elimina un film
app.delete("/movies/:id", (req, res) => {
// IMPLEMENTATION HERE
});

// Avvio del server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
