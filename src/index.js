import express from "express";

const app = express();
app.use(express.json());
const port = 3009;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/movies", (req, res) => {
  const movies = [
    {
      title: "Avatar",
      director: "james cameron",
    },
    {
      title: "Interstellar",
      director: "XYZ",
    },
  ];
  res.json(movies);
});

app.post("/api/movies" , (req, res) => 
{
  const movie = req.body;

  res.status(201).json({message: "Dodano film", ...movie});
}
)

app.listen(port, () => {
  console.log(`https://localhost:${port} on port ${port}`);
});


