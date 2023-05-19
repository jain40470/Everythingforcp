const express = require("express");
const connecttomongo = require("./db");
const cors = require("cors");

const app = express();

app.use(cors()); // isse dekhna hoga
app.use(express.json()); // json m bhjega

connecttomongo();

app.use("/Workshop", require("./routes/Tevent.js"));
app.use("/Register", require("./routes/Tuser.js"));

app.listen(800, () => {
  console.log("Listen");
});
