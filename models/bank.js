const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bankSchema = new Schema({
  employee: { type: String, required: true },
  department: { type: String, required: true },
  eventtype: { type: String, required: true },
  servicehours: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank;
