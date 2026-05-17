const fs = require('fs');

let content = fs.readFileSync('src/content.ts', 'utf8');
let goodStr = fs.readFileSync('good_content.txt', 'utf8');

// Find the start of the bad block and the end:
let p9start = content.indexOf(`id: "p9",`);
let p10start = content.indexOf(`id: "p10",`);

if (p9start !== -1 && p10start !== -1) {
  let p9codeStart = content.indexOf(`code: "# تحديد الرقم السري`, p9start);
  
  let newContent = content.substring(0, p9codeStart) + goodStr + content.substring(p10start);
  fs.writeFileSync('src/content.ts', newContent);
  console.log("Fixed content.ts!");
} else {
  console.log("Failed to find boundaries in content.ts");
}
