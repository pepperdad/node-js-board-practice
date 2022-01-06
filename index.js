const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // 알아보기
const mongoose = require('mongoose');

// DB setting
mongoose
  .connect(
    'mongodb+srv://jeong20909:aa^^ehdud12!@board.zpmr1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(() => console.log('MongoDB Connected...'))
  .catch((e) => console.log('MongoDB error: ', e));

// other setting
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/', require('./routes/home'));
app.use('/posts', require('./routes/post'));

const port = 3000;
app.listen(port, () => {
  console.log('server on! http://localhost:' + port);
});
