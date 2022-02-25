require('dotenv').config();

const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;

const initDatabaseRouter = require('./routers/init');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/init', initDatabaseRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.get('*', (req, res) => {
    res.json('server running');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
