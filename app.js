// const express = require('express');
// const https = require('https');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {     // ye globally use karna h iske bina res.write() kaam nhi karegaa
//    res.setHeader('Content-Type', 'text/html');
//   next();
// });

// app.get('/', function (req, res) {
//     // res.setHeader('Content-Type', 'text/html');

//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/', function (req, res) {
//     // res.setHeader('Content-Type', 'text/html');

//   const query = req.body.cityName;
//   const apiKey = '15421ba0d302fb53418e110f5b516d1c';
//   const units = 'metric';
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

//   https.get(url, function (response) {
//     if (response.statusCode !== 200) {
//       res.status(response.statusCode).send('Error: Unable to get weather information');
//       return;
//     }

//     let data = '';
//     response.on('data', function (chunk) {
//       data += chunk;
//     });

//     response.on('end', function () {
//         // res.setHeader('Content-Type', 'text/html');

//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const desc = weatherData.weather[0].description;
//       const icon = weatherData.weather[0].icon;
//       const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//       res.write(`<h3>The weather description is ${desc}</h3>`);
//       res.write(`<h2>The temperature in ${query} is ${temp} degree Celsius</h2>`);
//       res.write(`<img src="${imgUrl}">`);
// // res.write(`<img src=${imgUrl}>`);
//       res.end();
//     });
//   }).on('error', function (err) {
//     res.status(500).send(`Error: ${err.message}`);
//   });
// });

// app.listen(3000, function () {
//   console.log('Server is running on port 3000');
// });









// const { log } = require('console');
// const express = require('express');
// const https = require('https');
// const bodyParser = require("body-parser");


// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'text/html');
//     next();
// });


// app.get('/', function (req, res) {
//     // res.setHeader('Content-Type', 'text/plain')
//     res.sendFile(__dirname + "/index.html")
// })

// app.post("/", function (req, res) {

//     // console.log(req.body.cityName);  // yha per hamne jo indexhtml se cityName aarha tha vo catch kia

//     console.log("received");
//     // res.send("received all")


//     const query = req.body.cityName;
//     const apiKey = "15421ba0d302fb53418e110f5b516d1c";
//     const units = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units
//     // const url = "https://api.publicapis.org/entries"
//     // let data  = JSON.stringify(url);
//     https.get(url, function (response) {
//         console.log(response.statusCode);
//         // res.send(response)

//         response.on("data", function (data) {
//             // console.log(data);      // aisa karne per hame data buffer ki form me milta h
//             const weatherData = JSON.parse(data)    // yha per data hamne parse kr liya.
//             // console.log(weatherData);  // ab data hme object ki form me milegaa.

//             // const object = {
//             //     name : "Atul",
//             //     age : 18 
//             // }
//             // // console.log(object);       //{ name: 'Atul', age: 18 }
//             // console.log(JSON.stringify(object));    //{"name":"Atul","age":18}

//             // res.setEncoding('utf8')
//             const temp = weatherData.main.temp
//             console.log(temp);
//             const desc = weatherData.weather[0].description
//             const icon = weatherData.weather[0].icon;
//             let imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
//             console.log(icon);
//             console.log(desc);
//             res.write("<h3>The weather description is  " + desc + "</h3>");
//             res.write('<h2>The temprature in ' + query + ' is ' + temp + ' degree celcius</h2>');
//             res.write("<img src=" + imgUrl + ">");
//             // console.log(imgUrl);

//             res.end();
//         })
//     })

//     // res.send("Server is running"); hum res.send() ko bs 1 baar hi use karenge multiple time nhi kr sakte
//     //   Agar multiple output chahiye to hm output ko concatenate kr sakte h

// })




// app.listen(3000, function () {
//     console.log("Server is running on port 3000");
// }) 







const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {      //ye globally use karna h iske bina res.write() kaam nhi karegaa
   res.setHeader('Content-Type', 'text/html');
  next();
});

app.get('/', function (req, res) {
    // res.setHeader('Content-Type', 'text/html');

  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
    // res.setHeader('Content-Type', 'text/html');

  const query = req.body.cityName;
  const apiKey = '15421ba0d302fb53418e110f5b516d1c';
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

  https.get(url, function (response) {
    if (response.statusCode !== 200) {
      res.status(response.statusCode).send('Error: Unable to get weather information');
      return;
    }

    let data = '';
    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function () {
        // res.setHeader('Content-Type', 'text/html');

      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgUrl = 'https://openweathermap.org/img/wn/'+icon+'@2x.png';

      res.write('<h3>The weather description is '+desc+'</h3>');
      res.write('<h2>The temperature in '+query+' is '+temp+' degree Celsius</h2>');
      res.write('<img src="'+imgUrl+'">');
// res.write(`<img src=${imgUrl}>`);
      res.end();
    });
  }).on('error', function (err) {
    res.status(500).send(`Error: ${err.message}`);
  });
});

app.listen(3000, function () {
  console.log('Server is running on port 3000');
});