const router = require("express").Router();
const bankRoutes = require("./banks");

// Book routes
router.use("/banks", bankRoutes);

module.exports = router;
