const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

let history = [];
let ans = 0;

app.post('/equals', (req, res) => {
    console.log(`Incoming POST /equals: `, req.body);

    // Define req.body variables
    let num1 = Number(req.body.firstNum);
    let num2 = Number(req.body.secondNum);
    let operator = req.body.operator;
    let ans = calculate(num1, num2, operator);
    // Push object to history array
    history.push(req.body);

    // Log answer to equation
    console.log('Answer is:', ans);

    // Send success POST
    res.sendStatus(201);
});

app.get('/answer', (req, res) => {
    console.log(`Incoming GET /answer`);
    res.send(ans.toString());
});

app.get('/history', (req, res) => {
    console.log(`Incoming GET /history`);
    res.send(history).status(201);
});

function calculate(num1, num2, operator) {
    // if else chain to determine what math operation to run
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