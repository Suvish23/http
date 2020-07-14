const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();
app.get('/api/v1/bootcamps', (req, res) => {
  //express converts java script  directly into json
  //   res.json({ name: 'Brad' });
  //used to return status of request
  //   res.sendStatus(400);
  //return data and
  res.status(200).json({
    sucess: true,
    message: 'Show all bootcamps',
  });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    sucess: true,
    message: `get bootcamp ${req.params.id}`,
  });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    sucess: true,
    message: `Update bootcamp ${req.params.id}`,
  });
});
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    sucess: true,
    message: 'create a new bootcamp',
  });
});
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    sucess: true,
    message: `Display bootcamp ${req.params.id}`,
  });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    sucess: true,
    message: `Delete bootcamp ${req.params.id}`,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server runing in ${process.env.NODE_ENV} node on port ${PORT}`)
);
