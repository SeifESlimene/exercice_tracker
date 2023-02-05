const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const exercisesRouter = require("./routes/exercises.js");
const userRouter = require("./routes/users.js");

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("MongoDB Database Connection Established Successfully!");
});

app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server Is Running On Port ${port}`);
});
