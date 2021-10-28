console.log("start (async)")

const { readFile, writeFile } = require("fs");

const readFileCallback = (err, result) => {
  if (err) {
    return;
  }
  writeFile(
    "./content/result-async.txt",
    result,
    { flag: "a" },
    writeFileCallback
  );
};

const writeFileCallback = (err, result) => {
    console.log("file writed")
};

readFile("./content/first.txt", "utf-8", readFileCallback);
readFile("./content/second.txt", "utf-8", readFileCallback);
console.log("done (async)")
