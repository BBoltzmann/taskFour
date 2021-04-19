const fs = require('fs')
const https = require("https");
const file = fs.createWriteStream("./result/post.json");

https.get("https://jsonplaceholder.typicode.com/posts", response => {
    response.pipe(file);
});