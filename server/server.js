const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

let history = [];

app.post('/equals', (req, res) => {
    console.log(`Incoming POST /equals: `, req.body);
    history.push(req.body);
    res.sendStatus(201);
});




app.listen(PORT, () => {
    console.log('listening on port', PORT)
});