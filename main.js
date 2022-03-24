let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request =  require("request");
const cheerio = require("cheerio");

request(url, cb);

function cb(err, res, body){
    if(err){
        console.error("error", err);
    } else {
        handleHTML(body);
    }
}

function handleHTML(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    //console.log(anchorElem.html());   o/p -> View All Results

    // attr() -> metthod forr getting all attributes and there values
    let relativeLink = anchorElem.attr("href");
    //console.log(relativeLink);
    let fullLink = "https://www.espncricinfo.com" + relativeLink;
    console.log(fullLink);
}


