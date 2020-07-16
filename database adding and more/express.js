const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();
app.get('/api', (req, res) => {
  //express converts java script  directly into json
  //   res.json({ name: 'Brad' });
  //used to return status of request
  //   res.sendStatus(400);
  //return data and
  let stat = 400;
  if (stat === 200) {
    res.status(stat).json({
      sucess: true,
      data: { id: 4, data: 'data returned successfully' },
    });
  } else {
    res.status(stat).json({ sucess: false });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server runing in ${process.env.NODE_ENV} node on port ${PORT}`)
);
