import path from "path";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import jsonServer from "json-server";

const app = express();
const router = express.Router();
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const remeshRouter = jsonServer.router(path.join(__dirname, "db.json"));
const port = process.env.PORT || 5000;

router.use("/api", remeshRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    res.sendFilter(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
