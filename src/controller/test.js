let data = [];
const nbQuery = 2;
const parse = (filename) => {
  const exelData = xlsx.readFile(filename);
  return Object.keys(exelData.Sheets).map((id) => ({
    id,
    data: xlsx.utils.sheet_to_json(exelData.Sheets[id]),
  }));
};

//console.log(parse(file));
let dataToExport = parse(file);
let index = 0;
dataToExport = dataToExport[0].data;
let start = 0,
  end = nbQuery;

const limit = dataToExport.length;

const createXlsx = (array) => {
  let colum = [{ id: "", label: "", houseName: "", city: "" }];
  array.forEach((v) => {
    colum.push({ city: v.properties.city });
  });
  const ws = xlsx.utils.json_to_sheet(colum);
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "Responses");
  xlsx.writeFile(wb, "./assets/sampleData.export.xlsx");
};

var message = "start";
let timer = null;
let compact = null;
let hundred = 100;

const getAdress = async () => {
  let array = dataToExport.slice(start, end);
  let findLimit = 0;

  await Promise.all(
    array.map((item) => {
      let lat = item["latitude 1"];
      let lon = item["longitude 1"];

      axios
        .get(`https://api-adresse.data.gouv.fr/reverse/?lon=${lon}&lat=${lat}`)
        .then(async (res) => {
          res = await res.data;
          data = data.concat(res);
        });
    })
  ).then(() => {
    console.log("start " + start + " " + "end " + end);
    start = end;
    end += nbQuery;
    let interval = 500;

    compact = dataToExport.slice(start, end);

    if (data.length == hundred) {
      interval = 15000;
      hundred - 10;
      hundred += 100;
    } else {
      interval;
    }
    timer = setTimeout(() => {
      if (data.length >= limit) {
        message = "finish";
        clearTimeout(timer);
        console.log(message);
      } else {
        getAdress(compact);
        findLimit += data.length;
        //console.log(data);
        console.log("alert " + hundred);
        console.log(data.length);
        console.log("end :" + findLimit);
      }
    }, interval);
  });

  /**/
};

/*do {
  let arra = dataToExport[index];
  console.log("start" + index);
  index++;
} while (index < limit);*/

console.log(limit);
console.log("start " + start + " " + "end " + end);

getAdress();

/*const interval = () => {
  timer = setInterval(() => {
    console.log("start " + start + " " + "end " + end);
    compact = dataToExport.slice(start, end);

    getAdress(compact);
    if (start > limit) {
      message = "finish";

      clearInterval(timer);
      console.log(data);
      console.log(data.length);
      console.log(message);
    }
  }, 2000);
};

//interval();*/

/*const ws = xlsx.utils.json_to_sheet(student_data);
const wb = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(wb, ws, "Responses");
xlsx.writeFile(wb, "./assets/sampleData.export.xlsx");*/
