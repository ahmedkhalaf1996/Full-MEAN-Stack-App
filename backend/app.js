//  Ahmed 2mhdUYFzJCWxieJf  // mongo user & pass
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');

const app = express();

mongoose.connect('mongodb+srv://Ahmed:2mhdUYFzJCWxieJf@cluster0-twyhl.mongodb.net/mean-db?retryWrites=true',{ useNewUrlParser: true })
 .then(()=>{
   console.log('conntected to mongodb successfuly');
 })
 .catch(() =>{
   console.log('connnection failed!');
 });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/// this function here to allow check visite to this path form the server
app.use('/images', express.static(path.join('backend/images')));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept"
   );
   res.setHeader("Access-Control-Allow-Methods",
    "GET,POST, PATCH, PUT, DELETE, OPTIONS")
  next();
});

app.use('/api/posts',  postsRoutes);

module.exports = app;
