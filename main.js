let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let guesstext = document.getElementById('guesstext');
let team = document.getElementById('team');
let role = document.getElementById('role');
let agent1 = document.getElementById('agent1');
let agent2 = document.getElementById('agent2');
let agent3 = document.getElementById('agent3');

// SELECT A RANDOM PLAYER (THEIR NAME) FROM THE VALID PLAYERS LIST
const random_player_name = valid_players[Math.floor(Math.random()*valid_players.length)].name;

btn.addEventListener('click', function() {
    let input_guess = document.getElementById('userInput').value;
    let isValidPlayer = false;

    if (input_guess.toLowerCase() == random_player_name.toLowerCase()) {
        output.innerHTML = 'Correct, you guessed the right player';
    } else if (input_guess.toLowerCase() != random_player_name.toLowerCase()) {
        output.innerHTML = 'You did not guess the right player';
    }

    function search_dicts(player) {
        if (player.name.toLowerCase() == input_guess.toLowerCase()) {
            isValidPlayer = true;
            team.innerHTML = player.team;
            role.innerHTML = player.role;
            agent1.innerHTML = player.agent1
            agent2.innerHTML = player.agent2
            agent3.innerHTML = player.agent3
        }
    }

    valid_players.forEach(search_dicts);

    if (isValidPlayer) {
        guesstext.innerHTML = 'The player you guessed is a valid player'
    }
    else {
        guesstext.innerHTML = 'The player you guessed is not a valid player'
    }
});