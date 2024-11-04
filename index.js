const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send([
        {
            id: 1,
            name: 'alok',
            age: 25
        },
        {
            id: 2,
            name: 'amit',
            age: 28
        },
        {
            id: 3,
            name: 'shivam',
            age: 30
        },
        {
            id: 4,
            name: 'gauri',
            age: 6
        }
    ])
})

app.listen(5000,()=>{
    console.log(`app is listening on port of 5000`)
})