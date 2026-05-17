const fs = require('fs');

let content = fs.readFileSync('src/content.ts', 'utf8');
let goodStr = fs.readFileSync('src/sec1.json', 'utf8');

// Using regex or search to replace everything from sec1 to sec2
let regex = /\{\s*["']?id["']?\s*:\s*["']sec1["'][\s\S]*?(?=\{\s*["']?id["']?\s*:\s*["']sec2["'])/m;

if (regex.test(content)) {
  let newContent = content.replace(regex, goodStr + ",\n  ");
  fs.writeFileSync('src/content.ts', newContent);
  console.log("Fixed content.ts!");
} else {
  console.log("Regex not matched");
}
