let newbtns = document.querySelectorAll(".btn1"); // Select all elements with the class 'btn1'
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector("#newbutton");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    newbtns.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
    msgContainer.classList.add("hide");
};

newbtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerText = "0";
            turn0 = false;
        } else {
            btn.innerText = "X";
            turn0 = true;
        }
        btn.disabled = true;
        checkWinner();
    });
});
const disabledbtn=()=>{
    for(let btn of btns)
        btn.disabled=true;
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbtn();
};

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1val = newbtns[pattern[0]].innerText;
        let pos2val = newbtns[pattern[1]].innerText;
        let pos3val = newbtns[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                // Exit loop once a winner is found
            }
        }
    }
};

// Example of attaching the reset function to the reset button
resetbtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click",resetGame);


