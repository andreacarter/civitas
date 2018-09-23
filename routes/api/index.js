const router = require("express").Router();
const hoursRoutes = require("./hours");

// Book routes
router.use("/hours", hoursRoutes);

module.exports = router;
