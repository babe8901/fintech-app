require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const mainRouter = require("./routes/main");
const accountsRouter = require("./routes/accounts");
const transactionsRouter = require("./routes/transactions");
const usersRouter = require("./routes/users");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
// const authenticationMiddleware = require('./middleware/auth')

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello"));

app.use("/api/v1", mainRouter);
app.use("/api/v1/accounts", accountsRouter);
app.use("/api/v1/transactions", transactionsRouter);
app.use("/api/v1/users", usersRouter);

// app.use(authenticationMiddleware)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async (req, res) => {
  try {
    await connectDB(
      process.env.MONGO_URI,
      console.log(`DataBase connected...`)
    );
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
