index.js
const app = require('./app');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
test.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('{ "response": "Hello From DSCE" }'));
app.get('/will', (req, res) => res.send('{ "response": "Hello World" }'));
app.get('/ready', (req, res) => res.send('{ "response": "Great!, It works!" }'));
module.exports = app;
package.json
{
  "name": "node-docker-demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha test.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "supertest": "^6.3.3",
    "mocha": "^10.2.0"
  }
}
