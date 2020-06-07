const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require("./routes/auth");
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
})

const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", userRoutes);

app.listen(port, () => console.log(`Example app listening on ${port} !`));







