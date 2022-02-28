require('dotenv').config()

const express = require('express');
const cors = require('cors');

const port = process.env.PORT;

const pokemonRouter = require('./routers/pokemon');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pokemon', pokemonRouter)

app.get('*', (req, res) => {
    res.json('server running');
});

app.listen(4000, () => {
    console.log(`server started on port ${port}`);
});
