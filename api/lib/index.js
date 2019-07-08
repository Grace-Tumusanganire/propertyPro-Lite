"use strict";

const express = require("express");

const app = express();
const properties = [{
  id: 1,
  name: "rent"
}, {
  id: 2,
  name: "sale"
}];
const specific = [{
  id: 1,
  name: "2bedrooms"
}, {
  id: 2,
  name: "3bedrooms"
}, {
  id: 3,
  name: "villas"
}];
const actions = [{
  id: 1,
  name: "post property"
}, {
  id: 2,
  name: "update details"
}, {
  id: 3,
  name: "mark as sold"
}, {
  id: 4,
  name: "delete advert"
}];
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
app.get("/AvailableProperties/:id", (req, res) => {
  const property = properties.find(c => c.id === parseInt(req.params.id));
  if (!property) res.status(404).send("the property with the given id was not found");
  res.send(property);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening on port ".concat(port, "...")));