const express = require('express');
const mysql      = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: "mysql",
    user: "userIterator",
    password: "qwerty1234",
    database: "iterator-db"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/health', (req, res) => {
    console.log("test")
    res.json({status: "OK"})
})

app.get('/get', (req, res) => {
    con.query('SELECT * FROM interator', (err, rows, field) => {
        if (err) throw err
        return res.json(rows)
    })
})

app.post('/add', (req, res) => {
    const value = req.body.num;
    con.query(`INSERT INTO interator (state) VALUE (${value})`)
    return res.send('added !')
})

app.listen(port, function () {
    console.log(`Listening on port : ${port}`);
})