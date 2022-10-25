const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.write("<h1>GeeksforGeeks</h1>");
    res.write("<p>This is a basic Node.js web application</p>");
    res.send();
});

app.listen(3000, function () {
    console.log("server is up at port 3000");
});
