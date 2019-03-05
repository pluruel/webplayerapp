const express = require('express'); // express 모듈 추가하기

const app = express();
const port = 8081;

app.get('/', function(request, response) {
  response.send('Hello Express Node World!');
});

app.listen(port, function(err) {
  console.log('Connected port' + port);
  if (err) {
    return console.log('Found error', err);
  }
})

	
app.use(express.static("public"));