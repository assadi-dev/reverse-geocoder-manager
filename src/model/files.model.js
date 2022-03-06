const db = require(".");
const { format } = require("date-fns");

exports.create = function (data, callback) {
  const sql = `INSERT INTO files (name,path,size,createdAt) VALUES (?,?,?,?)`;
  let dateNow = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  const { name, path, size } = data;
  db.run(sql, [name, path, size, dateNow], (error, rows) => {
    try {
      if (error) {
        throw error.message;
      }
      callback({ ...data, message: "a new file has been added" });
    } catch (error) {
      callback(error);
    }
  });
};

exports.findAll = function (callback) {
  const sql = `SELECT * FROM files`;

  db.all(sql, (error, rows) => {
    if (error) {
      callback(error);
    }
    callback(rows);
  });
};

exports.find = function (id, callback) {
  const sql = `SELECT * FROM files WHERE id = ?`;

  db.get(sql, id, (error, rows) => {
    if (error) {
      callback(error);
    }
    callback(rows);
  });
};

exports.delete = function (id, callback) {
  const sql = "DELETE FROM files WHERE id = ?";
  db.run(sql, id, (errors, rows) => {
    try {
      if (errors) {
        throw error.message;
      }
      callback({ rows, message: "file has been deleted" });
    } catch (error) {
      callback(error);
    }
  });
};
