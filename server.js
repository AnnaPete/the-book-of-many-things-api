const express = require('express');
const app = express();
const data = require('./data');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'The Book of Many Things';

app.get('/', (request, response) => {
  response.send('I cast Fireball');
});

app.get('/api/v1/data', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  if (!data) {
    return response.status(404);
  }

  return response.status(200).json(data);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});