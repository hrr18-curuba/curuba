const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


const PORT = process.env.PORT || 8080;
const db =  process.env.MONGODB_URI || 'mongodb://localhost/curuba';
mongoose.connect(db);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../src/public'));

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, '/../src/public/index.html'));
});

app.listen(PORT, () => {console.log("Listening on port 8080");});

module.exports = app;