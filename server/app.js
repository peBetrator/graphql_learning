const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

// connection to mLab
mongoose.connect(
  "mongodb+srv://admin:admin@gph-learning-7tc5e.mongodb.net/test?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to DB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
