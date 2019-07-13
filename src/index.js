import express from "express";
// import { isMoment } from "moment";

import bodyParser from "body-parser";

import router from "./routes/users";

const app = express(); 

app.get('/', (req, res) => res.send('Welcome to Property Pro-lite'));

app.use("/api/v1", router);

app.use(bodyParser.json()) 

// app.use((req, res) => { res.status(404).send('Not Found!'); });


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));


export default app;

