const http = require('http');
const todos = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
];
const server = http.createServer((req, res) => {
  // res.statusCode = 404;
  //instead of this we use writeHead at once....
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader('X-Powered-By', 'Node.js');

  // console.log(req.headers.authorization);
  const { method, url } = req;
  let body = [];
  req
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();

      let status = 404;
      const response = {
        success: false,
        data: null,
      };

      if (method === 'GET' && url === '/todos') {
        status = 200;
        response.success = true;
        response.data = todos;
      } else if (method === 'POST' && url === '/todos') {
        const { id, text } = JSON.parse(body);
        todos.push({ id, text });
        status = 201;
        response.success = true;
        response.data = todos;
      }

      res.writeHead(status, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js',
      });

      res.end(JSON.stringify(response));
    });
});

const PORT = 5000;
//to run server we should call listen
server.listen(PORT, () => console.log(`Server running on Portas ${PORT}`));
