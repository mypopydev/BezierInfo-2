var fs = require("fs-extra");
var path = require("path");
const BASEDIR = path.join(__dirname, "..");

// copy the en-GB content as default content
fs.copySync(path.join(BASEDIR, "en-GB/index.html"), path.join(BASEDIR, "index.html"));
fs.copySync(path.join(BASEDIR, "en-GB/article.js"), path.join(BASEDIR, "article.js"));

// make sure to remove the `<base>` tag from the index, and replace the JSX "className" with "class"
var html = fs.readFileSync(path.join(BASEDIR, "index.html")).toString();
html = html.replace('    <base href="..">\n', '');
html = html.replace('className=', 'class=');
html = html.replace('<script src="en-GB/article.js', '<script src="article.js');
fs.writeFileSync(path.join(BASEDIR, "index.html"), html);
