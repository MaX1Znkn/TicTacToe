const Player = (name) => {
    return { name };
};
let first = prompt("Первый игрок! Назови своё имя!", "Джон");
const firstPlayer = Player(first);

let second = prompt("Второй игрок! Назови своё имя!", "Джош");
const secondPlayer = Player(second);

let name1 = document.getElementById("player_one");
name1.innerHTML += firstPlayer.name;

let name2 = document.getElementById("player_two");
name2.innerHTML += secondPlayer.name;

let check = false;

function putSign() {
    let sign = document.getElementsByClassName("sign");
    let j = 0;

    for (let i = 0; i < 9; i++) {
        sign[i].onclick = () => {
            if (sign[i].innerHTML == "" && check == false) {
                if (j % 2 == 0) {
                    sign[i].style.color = "firebrick";
                    sign[i].innerHTML = "X";
                } else {
                    sign[i].innerHTML = "O";
                }
                j++;
                findWinner(sign);
            }
        };
    }
}

function findWinner(sign) {
    for (let i = 0; i < 7; i += 3) {
        if (
            sign[i].innerHTML != "" &&
            sign[i].innerHTML == sign[i + 1].innerHTML &&
            sign[i].innerHTML == sign[i + 2].innerHTML
        ) {
            playerWin(sign[i].innerHTML);
            check = true;
        }
    }
    for (let i = 0; i < 3; i++) {
        if (
            sign[i].innerHTML != "" &&
            sign[i].innerHTML == sign[i + 3].innerHTML &&
            sign[i].innerHTML == sign[i + 6].innerHTML
        ) {
            playerWin(sign[i].innerHTML);
            check = true;
        }
    }
    if (
        sign[4].innerHTML != "" &&
        sign[4].innerHTML == sign[0].innerHTML &&
        sign[4].innerHTML == sign[8].innerHTML
    ) {
        playerWin(sign[4].innerHTML);
        check = true;
    }
    if (
        sign[4].innerHTML != "" &&
        sign[4].innerHTML == sign[2].innerHTML &&
        sign[4].innerHTML == sign[6].innerHTML
    ) {
        playerWin(sign[4].innerHTML);
        check = true;
    }
}

function playerWin(sign) {
    if (sign == "X") {
        alert(`${firstPlayer.name} Winner!`);
    } else {
        alert(`${secondPlayer.name} Winner!`);
    }
    document.onclick = function () {
        return false;
    };
    let restart = confirm("Перезапустить?");
    if (restart) {
        location.reload();
    }
}

putSign();
