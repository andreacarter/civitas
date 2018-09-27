const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  todo: { type: String },
  date: { type: Date, default: Date.now }
});

const Tasks = mongoose.model("Tasks", tasksSchema);

module.exports = Tasks;
