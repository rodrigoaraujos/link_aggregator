const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json('API runing...')
})

app.listen(3001, () =>{
    console.log('API listening on port 3001')
})