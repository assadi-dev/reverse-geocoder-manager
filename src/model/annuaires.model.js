const db = require(".");

exports.create = function (data, callback) {
  const sql =
    "INSERT INTO annuaires (id, latitude1, longitude1,latitude2,longitude2,latitude3,longitude3,result_housenumber,result_name,result_postcode,result_city,departement) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

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
  } = data;
  db.run(
    sql,
    [
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
    ],
    (error, rows) => {
      try {
        if (error) {
          throw error.message;
        }
        callback({ ...data, message: "a new coordonate has been added" });
      } catch (error) {
        callback(error);
      }
    }
  );
};

exports.findAll = function (callback) {
  const sql = `SELECT * FROM annuaires`;

  db.all(sql, (error, rows) => {
    if (error) {
      callback(error);
    }
    callback(rows);
  });
};

exports.find = function (id, callback) {
  const sql = `SELECT * FROM annuaires WHERE id = ?`;
  db.get(sql, id, (error, rows) => {
    if (error) {
      callback(error);
    }
    callback(rows);
  });
};

exports.delete = function (id, callback) {
  const sql = "DELETE FROM annuaires WHERE id = ?";
  db.run(sql, id, (errors, rows) => {
    try {
      if (errors) {
        throw error.message;
      }
      callback({ rows, message: "A coordonnate has been deleted" });
    } catch (error) {
      callback(error);
    }
  });
};

exports.update = function (id, data, callback) {
  const sql =
    "UPDATE annuaires SET latitude1=?, longitude1 = ?,latitude2 =?,longitude2 = ?,latitude3 = ?,longitude3=?,result_housenumber=?,result_name=?,result_postcode=?,result_city=?,departement=?  WHERE id = ?";
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
  } = data;
  db.run(
    sql,
    [
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
      id,
    ],
    (errors, rows) => {
      try {
        if (errors) {
          throw error.message;
        }
        callback({ ...data, message: "A coordonnate has been updated" });
      } catch (error) {
        callback(error);
      }
    }
  );
};
