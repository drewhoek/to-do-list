$(function () {
    console.log('jq and js');
    $('#equals-button').on('click', handleSubmit);
    $('#add-button').on('click', add);
    $('#subtract-button').on('click', subtract);
    $('#multiply-button').on('click', multiply);
    $('#divide-button').on('click', divide);
    $('#equals-button').on('click', getAnswer);
    $('#equals-button').on('click', getHistory);
    $('#clear-button').on('click', clear);
});

let currentOperator = '';

function handleSubmit() {
    // package inputs into object to be sent off to server
    let newEquationObject = {
        firstNum: $('#first-num-input').val(),
        operator: currentOperator,
        secondNum: $('#second-num-input').val(),
        ans: getAnswer(),
    };

    // ajax POST to send info object to server
    $.ajax({
        method: 'POST',
        url: '/equals',
        data: newEquationObject
    }).then(function (res) {
        console.log(res);
    });
}

function getAnswer() {
    $.ajax({
        type: 'GET',
        url: '/answer'
    }).then(function (res) {
        // change span to show answer
        console.log(res);
        $('#answer').text(`${res}`);
    });
};

function getHistory() {
    $.ajax({
        type: 'GET',
        url: '/history'
    }).then(function (res) {
        console.log(res);
        $('#history-list').empty();
        for (let i = 0; i < res.length; i++) {
            const equation = res[i];
            $('#history-list').append(`
            <li>${equation.firstNum} ${equation.operator} ${equation.secondNum} = ${equation.ans}</li>
        `);
        }
    });
}

function clear() {
    // clear inputs
    $('#first-num-input').val('');
    $('#second-num-input').val('');
    // clear current operator
    currentOperator = '';
}

function add() {
    currentOperator = "+";
}

function subtract() {
    currentOperator = "-";
}

function multiply() {
    currentOperator = "*";
}

function divide() {
    currentOperator = "/";
}