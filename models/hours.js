const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hoursSchema = new Schema({
  employee: { type: String, required: true },
  department: { type: String, required: true },
  eventtype: { type: String, required: true },
  servicehours: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Hours = mongoose.model("Hours", hoursSchema);

module.exports = Hours;
