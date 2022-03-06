const router = require("express").Router();
const uploads = require("../middleware/multer/uploads");
const controller = require("../controller/files.controller");

router.get("/files", controller.findAll);
router.get("/file/:id", controller.find);
router.post("/file", uploads.single("document"), controller.add);
router.delete("/file/:id", controller.delete);

module.exports = router;
