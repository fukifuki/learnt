const express = require('express');
const helloRouter = require('./routers/hello');
require('./db/mongoose');

const app = express();
const port = process.env.port || 3000;

app.use(helloRouter);
app.use(express.json());

app.listen(port, () => console.log(`Learnt server listening at http://localhost:${port}`));
