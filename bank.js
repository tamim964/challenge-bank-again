function getInput(dw) {
    let input = document.getElementById(dw + '-input')
    const inputValue = parseFloat(input.value)
    return inputValue
}
function update(dw, inputs) {
    const display = document.getElementById(dw + '-display')
    const displayText = parseFloat(display.innerText)
    const newDisplay = inputs + displayText
    display.innerText = newDisplay
    document.getElementById(dw + '-input').value = ''
}
function previousBalance() {
    const balance = document.getElementById('balance-display')
    const previousBalanceText = parseFloat(balance.innerText)
    return previousBalanceText
}
function updateBalance(input, isAdd) {
    const balance = document.getElementById('balance-display')

    const previousBalanceText = previousBalance()
    if (isAdd == true) {
        newBalance = previousBalanceText + input
    }
    else {
        newBalance = previousBalanceText - input
    }
    balance.innerText = newBalance
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const input = getInput('deposit')
    if (input > 0) {
        update('deposit', input)
        updateBalance(input, true)
    }
    else {
        console.log('error')
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const input = getInput('withdraw')
    const balanceprevious = previousBalance()
    if (input > 0 && balanceprevious > input) {
        update('withdraw', input)
        updateBalance(input, false)
    }
})