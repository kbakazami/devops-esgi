const express = require('express');

const app = express();

const port = 8080;


app.get('/health', (req, res) => {
    console.log("test")
    res.json({status: "OK"})
})

app.listen(port, function () {
    console.log(`Listening on port : ${port}`);
})