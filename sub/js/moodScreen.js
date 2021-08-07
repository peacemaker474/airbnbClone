const moodLeftBtn = document.getElementById("moodLeftBtn");
const moodRightBtn = document.getElementById("moodRightBtn");
const mood = document.querySelector(".mood_nations");
const nationWidth = document.querySelector(".nation");

let count = 0;


const handleMoveScreen = (event) => {
    event.preventDefault();
    if (count === 0) {
        mood.style.left = `-${mood.offsetWidth}px`;
        count--;
    } else {
        mood.style.left = `0px`;
        count++;
    }
}


function moveMoodScreen() {
    moodLeftBtn.addEventListener("click", handleMoveScreen);
    moodRightBtn.addEventListener("click", handleMoveScreen);
}

moveMoodScreen();