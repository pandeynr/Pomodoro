const express = require('express');
const bodyParser = require('body-parser');

let app = express();
    app.use(bodyParser());
    app.use(express.static(__dirname + '/public'));
let server = app.listen(8000,()=>{
    console.log('Pomodoro is running on port localhost:8000');
})