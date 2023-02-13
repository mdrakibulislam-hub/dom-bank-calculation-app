document.getElementById('deposit-button').addEventListener('click', function(){


    const newDepositValue = getInputValueByID('deposit-input');
    const previousTotalDepositValue = getElementValueByID('deposit-id');

    let newTotalDeposit = previousTotalDepositValue + newDepositValue;


    const previousTotalBalance = getElementValueByID('total-balance');
    const newTotalBalance = previousTotalBalance + newDepositValue;

    const depositInputField = document.getElementById('deposit-input');


    if(newDepositValue <= 0){
        alert('Amount less then or equal to zero are not acceptable.');
        depositInputField.value = '';
        return;
    }
    else{
    setTextElementValueByID('deposit-id', newTotalDeposit);
    setTextElementValueByID('total-balance', newTotalBalance);


    depositInputField.value = '';
    };



});

document.getElementById('withdraw-button').addEventListener('click', function(){
    const previousWithdraw = getElementValueByID('withdraw-id');
    const newWithdrawInput = getInputValueByID('withdraw-input');

    const newWithdrawTotal = previousWithdraw + newWithdrawInput;

    const previousTotalBalance = getElementValueByID('total-balance');
    const totalBalanceAfterWithdraw = previousTotalBalance - newWithdrawInput;

    const withdrawInput = document.getElementById('withdraw-input');

    if(newWithdrawInput > previousTotalBalance){
        alert('Amount greater then total balance are not acceptable.')
        withdrawInput.value = '';
        return;
    }
    else{

    setTextElementValueByID('withdraw-id', newWithdrawTotal);
    setTextElementValueByID('total-balance', totalBalanceAfterWithdraw);


    withdrawInput.value = '';

    }
})