let Parser = require("rss-parser");
let parser = new Parser();
// include node fs module
var fs = require("fs");
// https://www.hyperledger.org/category/blog/feed
function createMD(item) {
    
    let date = new Date(item.pubDate).getFullYear() + `-` + ("0" + (parseInt(new Date(item.pubDate).getMonth()) + 1)).slice(-2) + `-` + ("0" + new Date(item.pubDate).getDay()).slice(-2)
    //   console.log(item.link.split("/")[item.link.split("/").length - 2] );
    // return
    // writeFile function with filename, content and callback function
    fs.writeFile(
      `../_posts/` + date + `-` + item.link.split("/")[item.link.split("/").length - 2] + item.link.split("/")[item.link.split("/").length - 1] + ".md",
`---
published: true
layout: post
date: ` + item.pubDate + `
show-share: true
show-subscribe: true
title: ` + item.title.replace(':',',') + `
---
` + item.content,
      function (err) {
        if (err) throw err;
        console.log("File is created successfully.");
      }
    );
}
(async () => {
    let feed;
    feed = await parser.parseURL(
      "https://www.ibm.com/blogs/blockchain/feed/"
    );
    console.log(feed.title);
    console.log(feed.link );
    feed.items.forEach((item) => {
        createMD(item);
    });
    feed = await parser.parseURL(
      "https://www.hyperledger.org/category/blog/feed"
    );
    console.log(feed.title);
    console.log(feed.link );
    feed.items.forEach((item) => {
        console.log(item.link);
        createMD(item);
    });
  })();