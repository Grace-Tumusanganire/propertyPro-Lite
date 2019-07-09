const express = require("express");

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
export default app.routers;
