import { Router } from "express";

const movieRoute = Router();

movieRoute.get("/api/movies", (req, res) => {
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

movieRoute.post("/api/movies" , (req, res, next) => 
{
  const movie = req.body;

  if( !movie.title) {
    return next (new Error("provide title"));
  }

  res.status(201).json(movie)
}
)

export default movieRoute;
