require('dotenv').config();

const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;

const initDatabaseRouter = require('./routers/init');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/init', initDatabaseRouter);

app.get('*', (req, res) => {
    res.json('server running');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
