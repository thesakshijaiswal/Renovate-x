const fs = require("node:fs");
try {
  const data = fs.readdir("data", (err, data) => {
    console.log(data);
  });
} catch (err) {
  console.error(err);
}
