const router = require("express").Router();
const controller = require("../controller/annuaires.controller.js");

router.get("/annuaires", controller.findAll);
router.get("/annuaire/:id", controller.find);
router.post("/annuaire", controller.add);
router.delete("/annuaire/:id", controller.delete);
router.put("/annuaire/:id", controller.update);

module.exports = router;
