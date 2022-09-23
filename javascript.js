// Steps to make this program
// (1) Make a function that get the computer choice
// (2) Make a function that gets the users input
// (3) Make function that plays a round of RPS
//     based on user input and computers choice
// (4) Use game function to play multiple rounds of RPS

// Need to figure out how to user bebugger with Javscript

let rpsOptionsToSelect = ["Rock", "Paper", "Scissors"];

// Returns a random element sin rpsOptionsToSelect
function getComputerChoice()
{ 
    let rpsSelectionIndex= Math.floor(Math.random()*3);
    return rpsOptionsToSelect[rpsSelectionIndex];
}

function getUserChoice()
{
    let userSelection = prompt("Pick rock, paper, or scissors");
    // Cleaning up user input
    let userSelectionLowerCase = userSelection.toLowerCase();
    userSelectionInitialize = 
        userSelectionLowerCase.charAt(0).toUpperCase() + userSelectionLowerCase.slice(1);
    return userSelectionInitialize;
}

// Used to generate a single round of rock, paper, or scissors
function RpsRound(selectionFromUser, selectionFromComputer)
{ 
    // Outcome if User picks Rock
    if(selectionFromUser == "Rock")
    {
        if(selectionFromUser == "Rock" && selectionFromComputer == "Rock")
        { console.log("Its Tied"); }

        else if(selectionFromUser == "Rock" && selectionFromComputer == "Paper")
        { console.log("You lost"); }

        else
        { console.log("WINNER!"); }
    }

    // Outcome if user picks paper
    if(selectionFromUser == "Paper")
    {
        if(selectionFromUser == "Paper" && selectionFromComputer == "Paper")
        { console.log("Its Tied"); }

        else if(selectionFromUser == "Paper" && selectionFromComputer == "Scissors")
        { console.log("You lost"); }

        else
        { console.log("WINNER!"); }
    }
    // Outcome if user picks Scissors
    if(selectionFromUser == "Scissors")
    {
        if(selectionFromUser == "Scissors" && selectionFromComputer == "Scissors")
        { console.log("Its Tied"); }

        else if(selectionFromUser == "Scissors" && selectionFromComputer == "Rock")
        { console.log("You lost"); }
        
        else
        { console.log("WINNER!"); }
    }

}
// Used to play multiple rounds of rock, paper, scissors
function Game()
{ 
    for(let roundCounter = 0; roundCounter<=5; ++roundCounter)
    {
        let computersChoice = getComputerChoice();
        let usersChoice = getUserChoice();

        RpsRound(computersChoice, usersChoice);
    }
}

Game();


