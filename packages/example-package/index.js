let count = 0;
for (const key in process.env) {
  if (key.toLowerCase().startsWith("npm_")) {
    console.log(key, process.env[key]);
    ++count;
  }
}
console.log("Total npm_* env vars:", count);
