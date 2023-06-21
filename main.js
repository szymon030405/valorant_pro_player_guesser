let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let guesstext = document.getElementById('guesstext');
let counter = document.getElementById('counter')

let player_name = document.getElementById('name');
let team = document.getElementById('team');
let region = document.getElementById('region')
let role = document.getElementById('role');
let agent1 = document.getElementById('agent1');
let agent2 = document.getElementById('agent2');
let agent3 = document.getElementById('agent3');

let guessedCorrectly = false;

// SELECT A RANDOM PLAYER FROM THE VALID PLAYERS LIST, GET THEIR INFORMATION
const random_player = valid_players[Math.floor(Math.random()*valid_players.length)];
const random_player_name = random_player.name;
const random_player_team = random_player.team;
const random_player_region = random_player.region;
const random_player_role = random_player.role;
const random_player_agents = [random_player.agent1, random_player.agent2, random_player.agent3];

console.log(random_player_name, random_player_team, random_player_role)

let guess_number = 0

btn.addEventListener('click', function() {
    let input_guess = document.getElementById('userInput').value;
    let isValidPlayer = false;

    if (guessedCorrectly == true) {
        return
    }

    guess_number = guess_number + 1

    if (guess_number > 5) {
        output.innerHTML = 'You ran out of guesses!'
        guesstext.innerHTML = `Mystery player: ${random_player_name}`;
        return
    }

    counter.innerHTML = `${guess_number}/5`;

    if (guess_number == 1) {
        guessInfoContainer = document.getElementById('guess_info_container');
    }
    else if (guess_number == 2) {
        guessInfoContainer = document.getElementById('guess2_info_container');
    }
    else if (guess_number == 3) {
        guessInfoContainer = document.getElementById('guess3_info_container');
    }
    else if (guess_number == 4) {
        guessInfoContainer = document.getElementById('guess4_info_container')
    }
    else if (guess_number == 5) {
        guessInfoContainer = document.getElementById('guess5_info_container')
    }

    guessInfoContainer.style.display = "flex";

    player_name = guessInfoContainer.querySelector('#name');
    team = guessInfoContainer.querySelector('#team');
    role = guessInfoContainer.querySelector('#role');
    region = guessInfoContainer.querySelector('#region');
    agent1 = guessInfoContainer.querySelector('#agent1');
    agent2 = guessInfoContainer.querySelector('#agent2');
    agent3 = guessInfoContainer.querySelector('#agent3');

    if (input_guess.toLowerCase() == random_player_name.toLowerCase()) {
        output.innerHTML = 'Correct, you guessed the right player';
        guessedCorrectly = true
    } else if (input_guess.toLowerCase() != random_player_name.toLowerCase()) {
        output.innerHTML = 'You did not guess the right player';
    }

    function search_dicts(player) {
        if (player.name.toLowerCase() == input_guess.toLowerCase()) {
            isValidPlayer = true;

            if (player.name == random_player_name) {
                player_name.style.backgroundColor = "#4caf50";
            }
            else {
                player_name.style.backgroundColor = "#ff2800";
            }

            if (player.team == random_player_team) {
                team.style.backgroundColor = "#4caf50";
            }
            else {
                team.style.backgroundColor = "#ff2800";
            }

            if (player.region == random_player_region) {
                region.style.backgroundColor = "#4caf50";
            }
            else {
                region.style.backgroundColor = "#ff2800";
            }

            if (player.role == random_player_role) {
                role.style.backgroundColor = '#4caf50';
            }
            else {
                role.style.backgroundColor = "#ff2800";
            }

            if (random_player_agents.includes(player.agent1)) {
                agent1.style.backgroundColor = "#4caf50"

            }
            else {
                agent1.style.backgroundColor = "#ff2800"
            }

            if (random_player_agents.includes(player.agent2)) {
                agent2.style.backgroundColor = "#4caf50"
            }
            else {
                agent2.style.backgroundColor = "#ff2800"
            }
        
            if (random_player_agents.includes(player.agent3)) {
                agent3.style.backgroundColor = "#4caf50"
            }
            else {
                agent3.style.backgroundColor = "#ff2800"
            }

            player_name.innerHTML = `${player.name}`;
            team.innerHTML = `${player.team}`;
            role.innerHTML = `${player.role}`;
            region.innerHTML = `${player.region}`
            agent1.innerHTML = `${player.agent1}`;
            agent2.innerHTML = `${player.agent2}`;
            agent3.innerHTML = `${player.agent3}`;
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