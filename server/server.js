const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));

let history = [];
let ans = 0;

app.post('/equals', (req, res) => {
    console.log(`Incoming POST /equals: `, req.body);

    // Define req.body varibles
    let num1 = Number(req.body.firstNum);
    let num2 = Number(req.body.secondNum);
    let operator = req.body.operator;

    // Push object to history array
    history.push(req.body);

    // Log answer to equation
    console.log('Answer is:', calculate(num1, num2, operator));

    // Send success POST
    res.sendStatus(201);
});

app.get('/answer', (req, res) => {
    console.log(`Incoming GET /answer`);
    res.send(ans.toString());
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