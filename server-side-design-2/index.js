// import express from 'express';
// import fetch from 'node-fetch';
// import fs from 'fs';

// async function fetchURLStatus(urlArray) {
//     var id, urlName, statusCode, statusText;
//     const date = new Date();
//     var jsonString = {}

//     for (let pos in urlArray) {
//         await fetch(urlArray[pos], { method: 'GET' })
//             .then(res => {
//                 id = pos;
//                 urlName = urlArray[pos];
//                 statusCode = res.status;
//                 statusText = res.statusText;
//             })
//             .catch(error => {
//                 id = pos;
//                 urlName = urlArray[pos];
//                 statusCode = "Invalid URL";
//                 statusText = "The URL was invalid / not found";
//             });
//         jsonString = { ...jsonString, [id]: { url: urlName, status: statusCode, statusText: statusText, date: date } }
//     }
//     console.log(jsonString)
//     saveOutput(jsonString);
// };

// function saveOutput(jsonString) {
//     fs.writeFile("result.json", JSON.stringify(jsonString), function (err) {
//         if (err) throw err;
//         console.log('File Saved');
//     });
// }


// const app = express();
// const port = process.env.PORT || 8080;

// app.use(express.urlencoded({
//     extended: true
// }))

// app.post('/save-output', (req, res) => {
//     const { url } = req.body;
//     var urlList = url.split("\r\n");
//     // console.log(urlList);

//     fetchURLStatus(urlList);

//     res.send("RESULT SAVED ON SERVER AS RESULT.JSON");
//     res.end();
// })

// app.get('/', function (req, res) {
//     res.sendfile("index.html", { root: '.' });
// });

// app.listen(port);
// console.log('Server started at http://localhost:' + port);




import fetch from 'node-fetch';
import cheerio from 'cheerio';

const getReddit = async () => {
    // get html text from reddit
    const response = await fetch('https://reddit.com/');
    // using await to ensure that the promise resolves
    const body = await response.text();

    // parse the html text and extract titles
    const $ = cheerio.load(body);
    const titleList = [];

    // using CSS selector  
    $('title').each((i, title) => {
        const titleNode = $(title);
        const titleText = titleNode.text();

        titleList.push(titleText);
    });

    console.log(titleList);
};

getReddit();