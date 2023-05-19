const express = require("express");
const connecttomongo = require("./db");
const cors = require("cors");

const app = express();

app.use(cors()); // isse dekhna hoga
app.use(express.json()); // json m bhjega

connecttomongo();

app.use("/Workshop", require("./routes/Tevent.js"));
app.use("/Register", require("./routes/Tuser.js"));

app.post("/compile", (req, res) => {
  //getting the required data from the request
  let code = req.body.code;
  let language = req.body.language;
  let input = req.body.input;

  if (language === "python") {
    language = "py";
  }

  let data = {
    code: code,
    language: language,
    input: input,
  };
  let config = {
    method: "post",
    url: "https://codexweb.netlify.app/.netlify/functions/enforceCode",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  //calling the code compilation API
  Axios(config)
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(800, () => {
  console.log("Listen");
});
