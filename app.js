const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
const connectDB = require("./db/connect");

//middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const init = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

init();
