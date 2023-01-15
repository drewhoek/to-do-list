const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

let history = [];
let ans = 0;

app.post('/equals', (req, res) => {
    console.log(`Incoming POST /equals: `, req.body);
    let num1 = Number(req.body.firstNum);
    let num2 = Number(req.body.secondNum);
    let operator = req.body.operator;
    history.push(req.body);
    console.log('Answer is:', calculate(num1, num2, operator));
    res.sendStatus(201);
});

function calculate(num1, num2, operator) {
    if (operator === '+') {
        ans = num1 + num2;
    } else if (operator === '-') {
        ans = num1 - num2;
    } else if (operator === '*') {
        ans = num1 * num2;
    } else if (operator === '/') {
        ans = num1 / num2;
    } else {
        console.log('ERROR');
    }
    return ans;
}




app.listen(PORT, () => {
    console.log('listening on port', PORT)
});