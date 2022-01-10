import fs from 'fs';
import csso from 'csso';

const css = fs.readFileSync(__dirname+"/../translateforme.google.css", "utf8");
const result = csso.minify(css, {
  filename: __dirname + "/translateforme.google.css",
  sourceMap: true
});

fs.writeFileSync(__dirname + "/../../build/translateforme.google.css", result.css);