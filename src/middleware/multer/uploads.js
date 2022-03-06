const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = `src/uploads`;
    callback(null, dir);
  },
  filename: (req, file, callback) => {
    const name = file.originalname;
    callback(null, `${name}`);
  },
});

const fileFilter = (req, file, callback) => {
  if (
    file.mimetype == "text/csv" ||
    file.mimetype ==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.mimetype == "application/json"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Allowed only .csv, .xslx, .json"));
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
});
