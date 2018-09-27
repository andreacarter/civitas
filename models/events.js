const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  orgname: { type: String },
  eventtype: { type: String },
  location: { type: String },
  eventdate: { type: Date },
  eventtime: { type: String },
  date: { type: Date, default: Date.now }
});

const Events = mongoose.model("Events", eventsSchema);

module.exports = Events;