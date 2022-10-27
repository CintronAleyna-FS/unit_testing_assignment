const creditCardObscurer = (x) => {
    // check if card number is valid (between 12-16)
    const cardNum = x.toString()
    const cardNumLength = cardNum.length;
    if (cardNumLength < 12 || cardNumLength > 16){
        return "Invalid Credit Card"
    }

    // new variable for obscured credit card
    let obscuredCard =""; 
    // Obscure credit card number except last 4 digits
    // for loop
    // Iterate the length of the card number 
    for (let i = 0; i <= cardNumLength; i++) {
        // if its not the last 4 digits of the credit card
        // then replace each number value with "x" in a variable
        if ( i < cardNumLength - 4 ){
            obscuredCard += "x";
        } 
        // if it is the last for 4 digits
        // then keep the same value and store in variable
        if ( i > cardNumLength - 4){
            let currentNum = cardNum.charAt(i-1);
            obscuredCard += currentNum;
        }
    }
    return obscuredCard
}

module.exports = creditCardObscurer