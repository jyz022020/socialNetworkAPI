const express = require('express');
const mongoose = require('mongoose');
const model = require("./models");

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/networking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));