$(function() {
    console.log('jq and js');
    $('#equals-button').on('click', handleSubmit);
    $('#add-button').on('click', add);
});

let currentOperator = "";

function handleSubmit() {
    let newEquationObject = {
        "1st num": $('#first-num-input').val(),
        "operator": currentOperator,
        '2nd num': $('#second-num-input').val(),
    };
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