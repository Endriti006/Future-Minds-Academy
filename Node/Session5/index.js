const http = require('http')
const fs = require("fs").promises;
const path = require("path")
const BASE_PATH = path.join(__dirname, "public")

const server = http.createServer(async (req, res) => {
    let url = req.url
    if (req.url == '' || req.url == '/') {
        url == 'index.html'
    };



    switch (req.method) {
        case "Get":
            Get(url,req,res);
            break;
        case "POST":
            POST(url,req,res)
            break;
    }

    const filePath = path.join(BASE_PATH, url)
    try {
        const file = await fs.readFile(filePath)
        res.write(file)

    }
    catch (err) {
        const errFile = await fs.readFile(path.join(BASE_PATH, '404.html'))
        res.write(errFile)

    }
    finally {
        res.end()
    }

});

async function POST(url,req,res) {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      console.log(body);

      res.StatusCode = 302;
      res.setHeader('Location','https://www.facebook.com')
      res.end();
    });
}


const PORT = 8080;
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});