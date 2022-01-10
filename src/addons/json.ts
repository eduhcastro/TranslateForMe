import fs from 'fs';
const jso = fs.readFileSync(__dirname+"/../translateforme.flags.json", "utf8");
var minified = JSON.stringify(JSON.parse(jso));
fs.writeFileSync(__dirname + "/../../build/translateforme.flags.json", minified);