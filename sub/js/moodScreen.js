const moodLeftBtn = document.getElementById("moodLeftBtn");
const moodRightBtn = document.getElementById("moodRightBtn");
const mood = document.querySelector(".mood_nations");
const nationWidth = document.querySelector(".nation");

let leftCount = 0;
let rightCount = 0;

const moveMoodLeft = (event) => {
    event.preventDefault();
    if (leftCount === 0) {
        mood.style.left = `-${mood.offsetWidth}px`;
        leftCount--;
    } else {
        mood.style.left = `0px`;
        leftCount++;
    }
}

const moveMoodRight = (event) => {
    event.preventDefault();
    if (rightCount === 0) {
        mood.style.left = `-${mood.offsetWidth}px`;
        rightCount--;
    } else {
        mood.style.left = `0px`;
        rightCount++;
    }
}


function moveMoodScreen() {
    moodLeftBtn.addEventListener("click", moveMoodLeft);
    moodRightBtn.addEventListener("click", moveMoodRight);
}

console.log(mood.offsetWidth);
moveMoodScreen();