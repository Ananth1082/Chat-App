import express from "express";
import bodyParser from "body-parser";
import { createTables, dropAll as drop } from "./Model/index.js";
import { authRoutes } from "./Routes/auth.routes.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;
const init = () => {
  drop();
  createTables();
};

// init();

//Routes
authRoutes();

app.listen(port, () => {
  console.log("Listening at localhost:", port);
});

export { app };
