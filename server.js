const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();


app.use(bodyParser.json());


// DB config
//const db = require('/home/ives/code/MERN/config/keys,js').mongoURI;
const db = require('./config/key').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected....'))
    .catch(err => console.log(err));


app.use('/api/items',items);

//mongoose.connect('mongodb://localhost/test')
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));