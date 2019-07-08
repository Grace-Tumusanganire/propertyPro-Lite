const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Property Pro-Lite");
});

app.get("/api", (req, res) => {
  res.send("welcome");
});
app.get("/api/AvailableProperties", (req, res) => {
  res.send(properties);
});

app.get("/api/specific", (req, res) => {
  res.send(specific);
});

app.get("/api/actions", (req, res) => {
  res.send(actions);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
