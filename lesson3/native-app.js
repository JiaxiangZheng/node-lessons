// 使用node原生的http模块建立一个Web服务器
// 对于客户端的每次请求，重新向cnode发起客户端请求，将得到的结果返回
// 这样的结果是以localhost:4000请求，但实际显示的页面结果全是cnode.js上的内容
var superagent = require("superagent");

var http = require("http"),
    url = require("url");

http.createServer(function (req, res) {
    superagent.get(url.resolve("https://cnodejs.org", req.url))
      .end(function (err, sres) {
        if (err) {
            return;
        }

        // option 1: we grab all the contents  
        res.end(sres.text);
        return;
    });
}).listen(4000);

console.log("listening at port 4000");
