const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

let history = [];

app.post('/equals', (req, res) => {
    console.log(`Incoming POST /equals: `, req.body);
    history.push(req.body);
    console.log(calculate(req.body));
    res.sendStatus(201);
});





function calculate(equationObject) {
    let ans = 0;
    if (equationObject.operator === '+') {
        ans = equationObject.firstNum + equationObject.secondNum;
    } else if (equationObject.operator === '-') {
        ans = equationObject.firstNum - equationObject.secondNum;
    } else if (equationObject.operator === '*') {
        ans = equationObject.firstNum * equationObject.secondNum;
    } else if (equationObject.operator === '/') {
        ans = equationObject.firstNum / equationObject.secondNum;
    } else {
        console.log('ERROR');
    }
    return ans;
}




app.listen(PORT, () => {
    console.log('listening on port', PORT)
});