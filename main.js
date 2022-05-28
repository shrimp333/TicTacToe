let who = 'X';
let playing = true;
let amountClicked = 0;
const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

changeState = (place) => {
    if (!playing)
        return;
    const toChange = document.getElementById(`button${place}`);
    if (toChange.innerHTML != '')
        return;
    amountClicked++;
    toChange.innerHTML = who;
    if (who == 'X')
        who = 'O';
    else
        who = 'X';
    checkCondition();
}


const conditionHeader = document.getElementById("condition");
checkCondition = () => {

    //check if win
    for (i = 0; i < 8; i++) {
        if (document.getElementById(`button${winConditions[i][0]}`).innerHTML == document.getElementById(`button${winConditions[i][1]}`).innerHTML && document.getElementById(`button${winConditions[i][0]}`).innerHTML == document.getElementById(`button${winConditions[i][2]}`).innerHTML && document.getElementById(`button${winConditions[i][0]}`).innerHTML != '') {
            playing = false;
            conditionHeader.innerHTML = `${document.getElementById(`button${winConditions[i][0]}`).innerHTML} has won`
        }
    }

    //check if draw
    let isPlay = new Array(9).fill(true);
    for (i = 1; i <= 9; i++) {
        const toCheck = document.getElementById(`button${i}`);
        if (toCheck.innerHTML != '') {
            isPlay[i] = false;
            console.log(isPlay[i])
        }
    }
    if (!isPlay.every(Boolean) && amountClicked == 9) {
        conditionHeader.innerHTML = "Draw";
        playing = false;
    }
}

reset = () => {
    who = 'X';
    playing = true;
    amountClicked = 0;
    conditionHeader.innerHTML = "Playing";
    for (i = 1; i <= 9; i++) {
        const toChange = document.getElementById(`button${i}`);
        toChange.innerHTML = '';
    }
}