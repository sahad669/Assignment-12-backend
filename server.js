import express from "express";
import mongoose from "mongoose"
import itemRouter from "./routes/itemRoutes.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json())




const port = process.env.port
mongoose.connect(process.env.mongourl).then(() => console.log("connected to mongodb")).then(() => {
  app.listen(port, () => {
    console.log("server started");
  });
})

app.use("/items",itemRouter)


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.get("/", (req, res) => {
  res.status(201).json({message:"Inventory API is Running"});
  console.log("Inventory API is Running")
});

app.get("/health", (req, res) => {
  res.json({ status: "Server is healthy" });
});



app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});





