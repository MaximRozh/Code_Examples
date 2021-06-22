const express = require('express')
const fs = require('fs');
const app = express();
const port = 3000

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post('/foo', (req, res) => {
    const requestPayload = JSON.parse(req.body);
    const {login, password} = requestPayload

    read({
      url: './user/users.json',
      callback: (error, payload) => {
        const data = JSON.parse(payload);

        const checkPass = data.filter(item => item.login == login && item.password == password);

        if(checkPass.length == 0) {
          res
          .status(401)
          .send('Not found');
        } else {
          let userId = checkPass[0].id;
          res
          .status(200)
          .json(userId);
        }
        
      }
    })

});

app.get("/goods/:id", (req, res) => {
  const userID = req.params.id
  read({
    url: `./user/goods/${userID}`,
    callback: (error, payload) => {
      res.send(payload)
    }
  })
} )

const read = ({url, callback}) => fs.readFile(url, "utf-8", callback);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});