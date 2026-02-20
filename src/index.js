import express from "express";
import movieRoute from "./routes/movies.routes.js";
import defaultRoute from "./routes/default.routes.js";

const app = express();
app.use(express.json());

const port = 3009;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", defaultRoute);
app.use("/api/movies", movieRoute);

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`https://localhost:${port} on port ${port}`);
});
