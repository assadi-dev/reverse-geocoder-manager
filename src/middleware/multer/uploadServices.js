const fs = require("fs");

const path = require("path");
const target = "src/";

/**
 *
 * @param {String} dir pathname
 *
 */
exports.verifDirectory = (dir, cb) => {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      //console.log("Directory is created.");
      cb;
    } else {
      //console.log("Directory already exists.");
      cb;
    }
  } catch (error) {}
};

exports.removeFile = (dir) => {
  const file = path.join(target + dir);

  fs.unlink(file, (err) => {
    if (err) throw err;
    console.log("Removing file ");
  });
};

exports.removeDirectory = (title) => {
  const dirPath = path.join(target + title);

  fs.rm(dirPath, { recursive: true, force: true }, (err) => {
    if (err) throw err;
    console.log("Removing directory");
  });
};
