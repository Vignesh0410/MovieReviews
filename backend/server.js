import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js";

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/',(req,res) => res.send("Hello World"));   

app.use("/api/v1/reviews", reviews);
// app.use("*",(req,res) => res.status(404).json({error: "not found"}));

export default app;

// fetch('http://localhost:5000/api/v1/reviews', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: "Esakki", rating: 5 })
//   });
  