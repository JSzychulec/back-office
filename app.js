const db = require('./config/mongoose').connect();
const { port } = require('./config/env');
const app = require('./config/express');

app.listen(port, () => console.log(`Server is working on port ${port}`));
db.once('open', () => console.log('Connected to the database'));
db.once('error', () => console.log('There was an error while connecting to the database'));