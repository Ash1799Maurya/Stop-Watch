const countDownElement = document.getElementById("countDown");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;
let startTime = false;

const startTimer = () => {
    if (!startTime) {
   intervalId = setInterval(() => {
        countDownElement.innerText = startCount++;
    }, 1000);
    startTime = true;
}
};

const stopTimer = () => {
    clearInterval(intervalId);
    startTime = false;
};

const resetTimer = () => {
    startCount = 0;
    countDownElement.innerText = startCount;
    clearInterval(intervalId);
    startTime = false;
};

const showStopValue = () => {
    const newPara = document.createElement("p");
    newPara.innerText = `The Stop Time Is ${startCount - 1}`;
    resetValueElement.append(newPara);
};

const clearTimeValue = () => {
    resetValueElement.innerHTML = "";
};


 const startBtn = document.querySelector(".start_btn");
 startBtn.addEventListener("click", startTimer);

 const resetBtn = document.querySelector(".reset_btn");
 resetBtn.addEventListener("click", resetTimer);


 const stopBtn = document.querySelector(".stop_btn");
 stopBtn.addEventListener("click", stopTimer);

document.querySelector(".time_btn").addEventListener("click", showStopValue);

document.querySelector(".clear_btn").addEventListener("click", clearTimeValue);

 startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
});

 stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
    startBtn.disabled = false;
});
