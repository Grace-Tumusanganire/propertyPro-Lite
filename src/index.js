// module.exports = function() {
//     return "";
// }
import express from "express";
// import { isMoment } from "moment";

import bodyParser from "body-parser";

import userRoutes from "./routes/users";

const app = express();

// app.get('/', (req, res) => res.send('Welcome to Property Pro-lite'));

app.use("/api/v1", userRoutes);

app.use(express.json());

// app.use((req, res) => { res.status(404).send('Not Found!'); });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

export default app;
