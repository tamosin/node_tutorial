console.log("start (async)")
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

//3 params: path, data and flag (a for append i think)
writeFileSync("./content/third.txt", "Hello, this is third", { flag: "a" });
console.log("done (async)")