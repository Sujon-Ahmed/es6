// tagged template

// 🔰 task: every player name prefix Mr.

function modifier(strings, ...values) {
    const m = strings.reduce((previousValue, currentValue) => {
        return previousValue + currentValue + (values.length ? 'Mr.' + values.shift() : '');
    }, '');
    return m;
}

let player1 = 'Sakib';
let player2 = 'Tamim';

console.log(modifier`We have ${player1} and ${player2} in our cricket team`);