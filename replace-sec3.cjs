const fs = require('fs');

let content = fs.readFileSync('src/content.ts', 'utf8');
let goodStr = fs.readFileSync('src/sec3.json', 'utf8');

// Find the start of sec3 and sec4
let sec3start = content.indexOf(`  {\n    id: "sec3",`);
let sec4start = content.indexOf(`  {\n    id: "sec4",`);

if (sec3start !== -1 && sec4start !== -1) {
  let newContent = content.substring(0, sec3start) + goodStr + content.substring(sec4start);
  fs.writeFileSync('src/content.ts', newContent);
  console.log("Fixed content.ts!");
} else {
  console.log("Failed to find boundaries in content.ts");
}
