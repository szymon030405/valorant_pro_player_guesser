let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let guesstext = document.getElementById('guesstext');
let counter = document.getElementById('counter')

let player_name = document.getElementById('name');
let team = document.getElementById('team');
let region = document.getElementById('region')
let role_box = document.getElementById('role_box');
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
let guessed_players = []

btn.addEventListener('click', function() {
    let input_guess = document.getElementById('userInput').value;
    let isValidPlayer = false;
    let playerAlreadyGuessed = false;

    if (guessedCorrectly == true) {
        return
    }

    if (guess_number == 5) {
        output.innerHTML = 'You ran out of guesses!'
        guesstext.innerHTML = `Mystery player: ${random_player_name}`;
        return
    }

    function check_if_valid(player) {
        if (player.name.toLowerCase() == input_guess.toLowerCase()) {
            isValidPlayer = true;
        }
    }

    valid_players.forEach(check_if_valid);

    if (isValidPlayer == false) {
        outputtext.innerHTML = 'The player you guessed does not exist (maybe typo)'
        return
    }

    // CHECK IF THE USER ALREADY GUESSED THIS PLAYER
    playerAlreadyGuessed = guessed_players.includes(input_guess.toLowerCase())
    if (playerAlreadyGuessed == true) {
        outputtext.innerHTML = 'You already guessed this player, try another'
        return
    }

    guess_number = guess_number + 1

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
    role_box = guessInfoContainer.querySelector('#role_box');
    role_img = guessInfoContainer.querySelector('#role_img');
    region = guessInfoContainer.querySelector('#region');
    agent1 = guessInfoContainer.querySelector('#agent1');
    agent2 = guessInfoContainer.querySelector('#agent2');
    agent3 = guessInfoContainer.querySelector('#agent3');

    console.log(guess_number)

    if (input_guess.toLowerCase() == random_player_name.toLowerCase()) {
        output.innerHTML = `Correct, you guessed the right player in ${guess_number} guesses!`;
        guesstext.innerHTML = 'Refresh the page to play again!'
        guessedCorrectly = true
    } else if (input_guess.toLowerCase() != random_player_name.toLowerCase()) {
        output.innerHTML = 'You did not guess the right player, try again';
    }

    function get_role_logo(player) {
        logo = ""

        if (player.role == 'Duelist') {
            logo = "images/Duelist.png"
        }
        else if (player.role == 'Initiator') {
            logo = "images/Initiator.png"
        }
        else if (player.role == 'Controller') {
            logo = "images/Controller.png"
        }
        else if (player.role == 'Sentinel') {
            logo = "images/Sentinel.png"
        }
        else if (player.role == 'Flex') {
            logo = "images/Flex.png"
        }

        return logo
    }

    function search_dicts(player) {
        if (player.name.toLowerCase() == input_guess.toLowerCase()) {
            guessed_players.push(player.name.toLowerCase())

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
                role_box.style.backgroundColor = '#4caf50';
            }
            else {
                role_box.style.backgroundColor = "#ff2800";
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
            role_img.src = get_role_logo(player);
            region.innerHTML = `${player.region}`
            agent1.innerHTML = `${player.agent1}`;
            agent2.innerHTML = `${player.agent2}`;
            agent3.innerHTML = `${player.agent3}`;
        }
    }

    valid_players.forEach(search_dicts);

    if (guess_number == 5 && guessedCorrectly == false) {
        output.innerHTML = 'You ran out of guesses!'
        guesstext.innerHTML = `Mystery player: ${random_player_name}`;
        return
    }
});