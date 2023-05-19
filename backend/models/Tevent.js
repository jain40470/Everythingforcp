const mongoose = require("mongoose");

const { Schema } = mongoose;

const getdate = () => {
  var date = new Date().toLocaleString();
  return date;
};

const Teventschema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cfhandle: {
    type: String,
    required: true,
  },
  imagelink: {
    type: String,
    default: "",
  },
  topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateofprop: {
    type: String,
    default: getdate(),
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    default: "No",
  },
});

module.exports = mongoose.model("teventss", Teventschema);
