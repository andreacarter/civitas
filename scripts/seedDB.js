const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/servicehours"
);

const eventsSeed = [
  {
    orgname: "Junior Achievement",
    eventtype: "Sponsorship Dinner",
    location: "310 Lakeside Restaurant",
    eventdate: "October 12, 2018",
    eventtime: "7:00 PM",
    date: { type: Date, default: Date.now }
  },
  {
    orgname: "Ruby's Place",
    eventtype: "Anniversary Gala",
    location: "Harry P. Leu Gardens",
    eventdate: "October 27, 2018",
    eventtime: "8:00 PM",
    date: { type: Date, default: Date.now }
  },
  {
    orgname: "Habitat for Humanity",
    eventtype: "Drive One for Habitat Golf Tournament",
    location: "Disney Palm Golf Course",
    eventdate: "November 3, 2018",
    eventtime: "8:00 AM",
    date: { type: Date, default: Date.now }
  }
];

db.Events
  .remove({})
  .then(() => db.Events.collection.insertMany(eventsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
