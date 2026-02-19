const express = require('express');
const app = express();
const port = 3000;

// This variable will be passed from TeamCity Parameters
const color = process.env.APP_COLOR || 'default-gray';

app.get('/', (req, res) => {
  res.send(`<h1>Hello TeamCity!</h1><p>The app color is: ${color}</p>`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});