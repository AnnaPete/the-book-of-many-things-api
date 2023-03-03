const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data');

app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'The Book of Many Things';

app.get('/', (request, response) => {
  response.send('I cast Fireball');
});

app.get('/api/v1/data', (request, response) => {
  if (!data) {
    return response.status(404);
  }

  response.status(200).json(data);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});