import express from "express";
import  db from "./SQL/db.config.js";
const app = express();
const port = 3000;


// Example query
db.none(`CREATE TABLE USER (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(100),
) `)
  .then((data) => {
    console.log("Data:", data.value);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
