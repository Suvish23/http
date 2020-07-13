const http = require('http');
const todos = [
  { id: 1, text: 'Todo One' },
  { id: 1, text: 'Todo One' },
  { id: 1, text: 'Todo One' },
];
const server = http.createServer((req, res) => {
  res.statusCode = 500;
  //instead of this we use writeHead at once....
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader('X-Powered-By', 'Node.js');
  res.writeHead(500, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js',
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
server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
