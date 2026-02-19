import express from "express";
import { title } from "node:process";


const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/api/movies", ()  => {

    const movies= [
    {
        title: "Avatar",
        director : "james cameron"
    },
     {
        title: "Interstellar",
        director : "XYZ"
    }
];
   res.json(movies);
}
)
 


app.listen(port, () => {
  console.log(`https://localhost:${port} on port ${port}`)
})
