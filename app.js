import express from "express";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import connectDB from "./database/db.js";

const app = express();
const PORT = 4000;
app.use(bodyParser.json());
await connectDB();

app.use(routes);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
