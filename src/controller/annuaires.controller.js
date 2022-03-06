const model = require("../model/annuaires.model");

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
    const {
      id,
      latitude1,
      longitude1,
      latitude2,
      longitude2,
      latitude3,
      longitude3,
      result_housenumber,
      result_name,
      result_postcode,
      result_city,
      departement,
    } = req.body;
    const data = {
      id,
      latitude1,
      longitude1,
      latitude2,
      longitude2,
      latitude3,
      longitude3,
      result_housenumber,
      result_name,
      result_postcode,
      result_city,
      departement,
    };
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
        model.delete(id, (query) => {
          res.status(200).json(query);
        });
      } else {
        res.status(200).json({ message: "No found or delete" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.update = (req, res) => {
  try {
    const id = req.params.id;
    const {
      latitude1,
      longitude1,
      latitude2,
      longitude2,
      latitude3,
      longitude3,
      result_housenumber,
      result_name,
      result_postcode,
      result_city,
      departement,
    } = req.body;
    const data = {
      latitude1,
      longitude1,
      latitude2,
      longitude2,
      latitude3,
      longitude3,
      result_housenumber,
      result_name,
      result_postcode,
      result_city,
      departement,
    };
    model.find(id, (query) => {
      if (query) {
        model.update(id, data, (query) => {
          res.status(200).json(query);
        });
      } else {
        res.status(200).json({ message: "No found or delete" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
