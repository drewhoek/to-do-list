$(function() {
    console.log('jq and js');
    $('#equals-button').on('click', handleSubmit);
    $('#add-button').on('click', add);
    $('#subtract-button').on('click', subtract);
    $('#multiply-button').on('click', multiply);
    $('#divide-button').on('click', divide);

});

let currentOperator = "";

function handleSubmit() {
    // package inputs into object to be sent off to server
    let newEquationObject = {
        firstNum: $('#first-num-input').val(),
        operator: currentOperator,
        secondNum: $('#second-num-input').val(),
    };

    // clear inputs
    $('#first-num-input').val('');
    $('#second-num-input').val('');

    // ajax POST to send info object to server
    $.ajax({
        method: 'POST',
        url: '/equals',
        data: newEquationObject
    }).then(function(res) {
        console.log(res);
    });
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