const model = require("../model/files.model");
const { removeFile } = require("../middleware/multer/uploadServices");

exports.findAll = (req, res) => {
  try {
    model.findAll((query) => {
      res.status(200).json(query);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.find = (req, res) => {
  try {
    const id = req.params.id;
    model.find(id, (query) => {
      res.status(200).json(query);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.add = (req, res) => {
  try {
    const { originalname, path, size, mimetype, filename } = req.file;
    const data = { name: filename, path: `uploads/${filename}`, size };

    model.create(data, (query) => {
      res.status(201).json(query);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.delete = (req, res) => {
  try {
    const id = req.params.id;

    model.find(id, (query) => {
      if (query) {
        removeFile(query.path);
        model.delete(id, (query) => {
          res.status(200).json(query);
        });
      } else {
        res.status(200).json({ message: "Fichier introuvable ou supprimer" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
