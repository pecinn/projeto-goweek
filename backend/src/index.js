const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://goweek:goweek123@cluster1-pecin-q7j2g.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('Server started on port 3000');
});