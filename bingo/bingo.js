const welcomeUser = () => {
    let askName = prompt('¡Welcome to ISDI Coders Bingo!\n\n¿What is your name?');
    userName = askName;
    if(askName !== '' || askName !== null) {
        alert(`¡Welcome, ${askName}!\n\nBefore you start, please read the game rules:`);
    } else {
        welcomeUser();
    }
};

const explainGame = () => {
    console.log(`GAME RULES\n‾‾‾‾‾‾‾‾‾‾\n\n1. Every player start with a card with 15 random numbers and 1.000 points.\n2. With each outgoing ball, 10 points will be deducted from your score.\n3. The player with most points, ¡WIN THE GAME!\n\n¿Ready to play Bingo, ${userName}? ¡Here we go!\n\n`);
};

let userName;
const bingoCard = [];
const createNumbersCard = () => {
    while (bingoCard.length < 15) {
        let randomNumber = Math.floor(Math.random() * 98 + 1);
        if (!bingoCard.includes(randomNumber)) {
            bingoCard.push(randomNumber);
        }
    }
};

let score = 1000;
const printCard = () => {
    let firstRow = [];
    let secondRow = [];
    let thirdRow = [];    
    for (let i = 0; i < bingoCard.length; i++) {
        if (i < 5) {
            firstRow.push(bingoCard[i]);
        } else if (i < 10) {
            secondRow.push(bingoCard[i]);
        } else {
            thirdRow.push(bingoCard[i]);
        }
    }
    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);
};

const confirmCard = () => {
    let confirm = prompt('¿Do you want to change the card numbers? yes/no').toLowerCase();
    if (confirm == 'yes') {
        console.log("New card:");
        bingoCard.splice(0,15);
        createNumbersCard();
        printCard();
        confirmCard();
    } else if (confirm == 'no') {
        createNumbersCard();
    } else {
        alert("Error! Plase write 'yes' or 'no'");
        confirmCard();
    }
};

let numberCard;
let numbersArray2 = [];
const getRandomNumber = () => {
    for(let i = 1; i < 100; i++) {
        numbersArray2.push(i)
    };
};

const ballRolling = () => {
    let numberBall = numbersArray2[Math.floor(Math.random() * 99)];
    if (isNaN(numberBall)) {
        ballRolling();
    } else {
        console.log("‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾");
        alert(`¡Number ${numberBall}!`);
        numbersArray2[numberBall -1] = "X";
        numberCard = numberBall;
        score -= 10;
    }
};

const checkNumber = () => {
    for(let i = 0; i < 15; i++) {
        if (bingoCard[i] === numberCard) {
            bingoCard[i] = "X";
            console.log(`¡The number ${numberCard} has been found in your card!`);
        }
    }
};

let line = 0;
const checkLine = () => {
    if (line === 0) {
        if (bingoCard[0] === "X" &&
            bingoCard[1] === "X" &&
            bingoCard[2] === "X" &&
            bingoCard[3] === "X" &&
            bingoCard[4] === "X") {
            console.log("¡¡ROW!!");
            alert("¡¡ROW!! Let's go get that BINGO");
            line++;
        } else if (bingoCard[5] === "X" &&
            bingoCard[6] === "X" &&
            bingoCard[7] === "X" &&
            bingoCard[8] === "X" &&
            bingoCard[9] === "X") {
            console.log("¡¡ROW!!");
            alert("¡¡ROW!! Let's go get that BINGO");
            line++;
        } else if (bingoCard[10] === "X" &&
            bingoCard[11] === "X" &&
            bingoCard[12] === "X" &&
            bingoCard[13] === "X" &&
            bingoCard[14] === "X") {
            console.log("¡¡ROW!!");
            alert("¡¡ROW!! Let's go get that BINGO");
            line++;
        }
    } 
};

let turns = 0;
let rankingPlayers = [
    {name: "Beatriz", puntos: Math.floor(Math.random() * 11) * 10},
    {name: "Aaron", puntos: Math.floor(Math.random() * 11) * 10},
    {name: "Julia", puntos: Math.floor(Math.random() * 11) * 10},
    {name: "Lorena", puntos: Math.floor(Math.random() * 11) * 10},
    {name: "Gerard", puntos: Math.floor(Math.random() * 11) * 10}
];

const ranking = () => {
    rankingPlayers.push({
        name: userName,
        puntos: score,
    });
    rankingPlayers.sort((a,b) => (a.puntos < b.puntos) ? 1 : -1)
    for (let i = 0; i < rankingPlayers.length; i++) {
        console.log(rankingPlayers[i]);
    }
};

const newGame = () => {
    let playAgain = prompt("¿Do you want to play again? yes/no").toLowerCase();
    if (playAgain == 'yes') {
        numbersArray2.splice(0,numbersArray2.length);
            bingoCard.splice(0,bingoCard.length);
            getRandomNumber();
            line = 0;
            score = 1000;
            bingo();
    } else if (playAgain == 'no') {
        alert(`¡Thank you to play with us ${userName}!\n\nHave a nice day :)`);
    } else {
        alert("Error! Please write 'yes' or 'no'");
        newGame();
    }
};

const checkBingo = () => {
    let bingo = 0;
    for (let i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i] === "X") {
            bingo++
        }
    }
    if (bingo === 15) {
        alert("¡¡¡BINGO!!!");
        console.log(`¡¡¡BINGO!!!\n\nYou have called out bingo in ${turns} rounds.\n\nYour final score is ${score} points, ¡CONGRATULATIONS!\n\nRANKING\n‾‾‾‾‾‾‾`)
        ranking();
        newGame();
    } else {
        nextTurn();
    }
};

const nextTurn = () => {
    let next = confirm(`¡The ball is rolling!\n\nClick "Accept" to draw a number`)
    if (next != true) {
        alert(`¿Are you living ${userName}?\n\nWe hope to see you soon again! Have a nice day :)`);
    } else {
        turns++;
        ballRolling();
        checkNumber();
        printCard();
        checkLine();
        checkBingo();
    }
};

const bingo = () => {
    welcomeUser();
    explainGame();
    createNumbersCard();
    printCard();
    confirmCard();
    getRandomNumber();
    nextTurn();
};
bingo();
