let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let guesstext = document.getElementById('guesstext');
let team = document.getElementById('team');
let role = document.getElementById('role');
let agent1 = document.getElementById('agent1');
let agent2 = document.getElementById('agent2');
let agent3 = document.getElementById('agent3');

// SELECT A RANDOM PLAYER FROM THE VALID PLAYERS LIST, GET THEIR INFORMATION
const random_player = valid_players[Math.floor(Math.random()*valid_players.length)];
const random_player_name = random_player.name;
const random_player_team = random_player.team;
const random_player_role = random_player.role;
const random_player_agents = [random_player.agent1, random_player.agent2, random_player.agent3];

console.log(random_player_name, random_player_team, random_player_role)

let guess_number = 0

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

            if (player.team == random_player_team) {
                team_match = true
            }
            else {
                team_match = false
            }

            if (player.role == random_player_role) {
                role_match = true
            }
            else {
                role_match = false
            }

            if (random_player_agents.includes(player.agent1)) {
                agent1_match = true
            }
            else {
                agent1_match = false
            }

            if (random_player_agents.includes(player.agent2)) {
                agent2_match = true
            }
            else {
                agent2_match = false
            }
        
            if (random_player_agents.includes(player.agent3)) {
                agent3_match = true
            }
            else {
                agent3_match = false
            }

            team.innerHTML = `${player.team}? ${team_match}`;
            role.innerHTML = `${player.role}? ${role_match}`;
            agent1.innerHTML = `${player.agent1}? ${agent1_match}`;
            agent2.innerHTML = `${player.agent2}? ${agent2_match}`;
            agent3.innerHTML = `${player.agent3}? ${agent3_match}`;
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