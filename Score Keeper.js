const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#resetbtn');
const limit = document.querySelector('#limit');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0
let winningScore = 5;
let isGameOver = false;

p1btn.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.innerText = p1Score;
    }
});

p2btn.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.innerText = p2Score;
    }
});

limit.addEventListener('change', function () {
    winningScore = Number(this.value);
    reset();
})

resetbtn.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
}