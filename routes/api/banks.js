const router = require("express").Router();
const banksController = require("../../controllers/banksController");

// Matches with "/api/books"
router.route("/")
  .get(banksController.findAll)
  .post(banksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(banksController.findById)
  .put(banksController.update)
  .delete(banksController.remove);

module.exports = router;
