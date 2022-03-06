const xlsx = require("xlsx");
const http = require("http");
var fs = require("fs");
var parse = require("csv-parse");
const db = require("./src/model");
const app = require("./src/app");

/*var parser = parse({ columns: true, delimiter: ";" }, function (err, records) {
  console.log(records);
});

//CSV Parser
//const file = `${__dirname}/upload/anuaire.csv`;
//fs.createReadStream(file).pipe(parser);
//console.log(`${__dirname}/upload/anuaire.csv`);

//Exel Parser
/*const file = "./upload/annuaire1.xlsx";
readXlsxFile(fs.createReadStream(file)).then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  console.log(rows);
});*/

const port = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(port, () => console.log(`server listening on port : ${port} `));
