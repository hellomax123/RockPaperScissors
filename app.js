// Functions

const printDetail = (player, computer) => {
    console.log(`The choice of player(${player.name}) is ${player.choice}`);
    console.log(`The choice of ${computer.name} is ${computer.choice}`);
}

const isWinnerOrDraw = (player, computer) => {
    if (player.choice === computer.choice) {
        return "draw";
    } else if (player.choice === "Rock" && computer.choice === "Scissors") {
        return true;
    } else if (player.choice === "Paper" && computer.choice === "Rock") {
        return true;
    } else if (player.choice === "Scissors" && computer.choice === "Paper") {
        return true;
    } else{
        return false;
    }
}

// Variables

let playerName = "Max";
let playerChoice = "Rock";
const choices = ["Rock", "Paper", "Scissors"]

// Player Object

const player = {
    name: playerName,
    choice: playerChoice,
    isWinner: false,
}

// Computer Object 

const computer = {
    name: "Computer",
    choice: choices[Math.floor(Math.random() * choices.length)],
    isWinner: false,
}

const result = isWinnerOrDraw(player, computer);

if (result === true) {
    printDetail(player, computer)
    console.log(`${player.name} wins!! 😃`)
} else if (result === false) {
    printDetail(player, computer)
    console.log(`${computer.name} wins!! .. Hence you lose 😪`)
} else if (result === "draw") {
    printDetail(player, computer)
    console.log("Its a draw! 😜")
}