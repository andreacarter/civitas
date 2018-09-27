const router = require("express").Router();
const hoursRoutes = require("./hours");
const tasksRoutes = require("./tasks");
const eventsRoutes = require("./events");

// Book routes
router.use("/hours", hoursRoutes);
router.use("/tasks", tasksRoutes);
router.use("/events", eventsRoutes);

module.exports = router;
