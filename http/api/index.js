const http = require("http");
const URL = require("url");
const fs = require("fs");
const path = require("path");
const data = require("./urls.json");
const { createBrotliCompress } = require("zlib");

function writeFile(cb) {
  fs.writeFile(
    path.join(__dirname, "urls.json"),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;

      cb(JSON.stringify({ massagem: "ok" }));
    }
  );
}
http
  .createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query;
    res.writeHead(200, {'Access-Control-Allow-Origin': '*'})


    if (!name || !url) return res.end(JSON.stringify(data));

    if (del) {
      data.urls = data.urls.filter((item) => String(item.url) !== String(url));

      return writeFile((massagem) => { res.end(massagem);
      });
    }


    data.urls.push({name, url})
   return writeFile(massagem=>{res.end(massagem)})

  })
  .listen(3000, () => console.log("api is runni"));
