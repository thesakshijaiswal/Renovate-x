const fs = require("node:fs");
const oldVal = "seminar";
const newVal = "Project";
const preview = true;
try {
  const data = fs.readdir("data", (err, data) => {
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      const newFile = item.replaceAll(oldVal, newVal);
      if (!preview) {
        fs.rename("data/" + item, newFile, () => {
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
