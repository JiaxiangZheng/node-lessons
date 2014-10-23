// native-app implements a web server using node core http module
// it will return the md5 result of url
var http = require("http"),
    utility = require("utility");


http.createServer(function (req, res) {
    res.end(utility.md5(req.url));
}).listen(4000);

console.log("listening at port 4000");
