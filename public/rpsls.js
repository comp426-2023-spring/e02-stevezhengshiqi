export {rps, rpsls}

function rps(args) {
    const options = ['rock', 'paper', 'scissors'];

    var input = args || options[Math.floor(Math.random() * options.length)];
    const opponentOption = options[Math.floor(Math.random() * options.length)];
    let res = (input === opponentOption) ? 'tie' : (
        (input === 'rock' && opponentOption === 'scissors') || (input === 'paper' && opponentOption === 'rock') || (input === 'scissors' && opponentOption === 'paper')
    ) ? 'win' : 'lose';
    return { "player": input, "opponent": opponentOption, "result": res };
}


function rpsls(args) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

    var input = args || options[Math.floor(Math.random() * options.length)];
    const opponentOption = options[Math.floor(Math.random() * options.length)];
    let res = (input === opponentOption) ? 'tie' : (
        (input === 'rock' && (opponentOption === 'scissors' || opponentOption === 'lizard')) ||
        (input === 'paper' && (opponentOption === 'rock' || opponentOption === 'spock')) ||
        (input === 'scissors' && (opponentOption === 'paper' || opponentOption === 'lizard')) ||
        (input === 'lizard' && (opponentOption === 'spock' || opponentOption === 'paper')) ||
        (input === 'spock' && (opponentOption === 'scissors' || opponentOption === 'rock'))
    ) ? 'win' : 'lose';
    return { "player": input, "opponent": opponentOption, "result": res };
}
