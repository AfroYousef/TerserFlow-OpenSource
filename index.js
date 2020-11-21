// TerserFlow --- https://npmjs.com/package/TerserFlow
const tf = require("terserflow");

// Express
const express = require("express");
const app = express();

app.use(express.static('static'))


String.prototype.replaceAll = function(search, replaceValue) {
  result = this.toString();
  while (result.includes(search)) {
    result = result.replace(search, replaceValue);
  }
  return result;
}
app.get('/obfuscate', async (req, res) => {
  let obf = "";
  let domains = req.query.domainLock;
  domains = undefined;
  let src = req.query.src;

  //res.send(new Array(req.query.domainLock, "example.com"));
  if (typeof domains === "string") {
    //console.log(domains);
    domains = ["google.com", "example.com"]
    obf = (await tf.obfuscate(req.query.code, true, domains))/*.replaceAll("\n", "<br>")*/;
    //console.log(domains);
  } else {
    //console.log("else");
    obf = (await tf.obfuscate(req.query.code, true, domains))/*.replaceAll("\n", "<br>")*/;
  }
  //res.sendFile("static/index.html", {root: __dirname})
  if (req.query.code) {
    res.status(200).send(obf);
  } else {
    res.status(500).send("NO_CODE");
  }
});


app.listen((process.env.PORT || 3000), () => { console.log("Server Started"); })
