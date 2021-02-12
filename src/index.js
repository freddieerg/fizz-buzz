const fs = require('fs');

/**
 * Checks to see if a given integer is prime.
 * @param n
 * @return {boolean}
 */
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

/**
 * Takes a message and writes it to a new line of fizzbuzz.log as well as logging to console.
 * @param message
 */
const writeToLog = (message) => {
    fs.appendFile('fizzbuzz.log', `${message}\n`, function (err) {
        if (err) throw err;
    });
    console.log(message);
};

for (let i = 1; i <= 500; i++) {
    writeToLog(i);
    if (i % 3 === 0 && i % 5 === 0) writeToLog('FIZZBUZZ');
    else if (i % 3 === 0) writeToLog('FIZZ');
    else if (i % 5 === 0) writeToLog('BUZZ');
    if (isPrime(i)) writeToLog('FiZZBUZZ++');
}
