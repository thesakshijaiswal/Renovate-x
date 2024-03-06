const fs = require("node:fs");
const path = require("path");
const oldVal = "seminar";
const newVal = "Project";
const filePath = __dirname;
const preview = true;
try {
  const data = fs.readdir(filePath, (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const newFile = path.join(filePath, item.replaceAll(oldVal, newVal));
      const oldFile = path.join(filePath, item);
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("Renamed successfully!");
        });
      } else {
        if ("data/" + item !== newFile) {
          console.log("data/" + item + "will be renamed to" + newFile);
        }
      }
    }
  });
} catch (err) {
  console.error(err);
}
