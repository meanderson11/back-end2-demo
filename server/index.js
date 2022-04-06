const express = require("express");
const cors = require("cors");

const app = express();

// const movies = require("./db.json");

app.use(cors());
app.use(express.json());

const {getMovies, deleteMovie, createMovie, updateMovie} = require("./controller.js");

// app.get("/api/movies", (req, res) => {
//     res.status(200).send(djson)
// });

app.get("/api/movies", getMovies);
app.delete("/api/movies/:id", deleteMovie);
app.post("/api/movies", createMovie);
app.put("/api/movies/:id", updateMovie);


app.listen(4004, () => {
    console.log("sever is up on port 4004");
});

