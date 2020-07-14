const http = require('http');
const todos = [
  { id: 1, text: 'Todo One' },
  { id: 1, text: 'Todo One' },
  { id: 1, text: 'Todo One' },
];
const server = http.createServer((req, res) => {
  res.statusCode = 404;
  //instead of this we use writeHead at once....
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader('X-Powered-By', 'Node.js');
  res.writeHead(404, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
  });
  console.log(req.headers.authorization);

  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      console.log(body);
    });

  res.end(
    JSON.stringify({
      sucess: false,
      data: null,
      error: 'not found',
    })
  );
});

const PORT = 5000;
//to run server we should call listen
server.listen(PORT, () => console.log(`Server running on Portas ${PORT}`));
