const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/servicehours"
);

const hoursSeed = [
  {
    employee: "John Smith",
    department: "Accounting",
    eventtype: "Tax Preparation",
    servicehours: 6,
    date: new Date(Date.now())
  },
  {
    employee: "James Bond",
    department: "Branch Services",
    eventtype: "Adult Financial Education",
    servicehours: 9,
    date: new Date(Date.now())
  },
  {
    employee: "Jane Doe",
    department: "Legal and Compliance",
    eventtype: "Youth Financial Education",
    servicehours: 4,
    date: new Date(Date.now())
  },
  {
    employee: "Jenny Williams",
    department: "Underwriting",
    eventtype: "Affordable Housing Loan Committee",
    servicehours: 6,
    date: new Date(Date.now())
  },

];

db.Hours
  .remove({})
  .then(() => db.Hours.collection.insertMany(hoursSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
