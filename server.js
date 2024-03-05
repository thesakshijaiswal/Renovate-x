const fs = require("node:fs");
const oldVal = "seminar";
const newVal = "Project";
try {
  const data = fs.readdir("data", (err, data) => {
    console.log(data);
  });
} catch (err) {
  console.error(err);
}
