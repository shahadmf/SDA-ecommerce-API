import express from "express";

import { dev } from "./config/config";

const app = express();
const port = dev.app.port || 8080;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Just wanted to check!");
});