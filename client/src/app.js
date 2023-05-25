var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3010, () => {
  console.log('servidor do cliente iniciou na porta 3010');
}
);
