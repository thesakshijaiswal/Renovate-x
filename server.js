const fs = require("node:fs");
const oldVal = "seminar";
const newVal = "Project";
try {
  const data = fs.readdir("data", (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const newFile = item.replaceAll(oldVal, newVal);
      fs.rename("data/" + item, newFile, () => {
        console.log("Renamed successfully!");
      });
    }
  });
} catch (err) {
  console.error(err);
}
