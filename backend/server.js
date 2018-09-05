import path from "path";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import jsonServer from "json-server";

const app = express();
const remeshRouter = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(middlewares);

app.use("/api", remeshRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));