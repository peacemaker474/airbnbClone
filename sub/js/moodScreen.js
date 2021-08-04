const moodLeftBtn = document.getElementById("moodLeftBtn");
const moodRightBtn = document.getElementById("moodRightBtn");
const mood = document.querySelector(".mood_nations");

const moveMoodLeft = (event) => {
    event.preventDefault();
    if (parseInt(mood.style.left) >= 0) {
        moodRightBtn.style.opacity = "1";
        moodRightBtn.style.cursor = "pointer";

        moodLeftBtn.style.opacity = "0.2";
        moodLeftBtn.style.cursor = "not-allowed";
    } else {
        mood.style.left = `${parseInt(mood.style.left) + 82.8}%`;
    }
}

const moveMoodRight = (event) => {
    event.preventDefault();
    if (parseInt(mood.style.left) > -140) {
        mood.style.left = `${parseInt(mood.style.left) - 82.8}%`;
        moodLeftBtn.style.opacity = "1";
        moodLeftBtn.style.cursor = "pointer";
    } else {
        moodRightBtn.style.opacity = "0.2";
        moodRightBtn.style.cursor = "not-allowed";
        return mood.style.left;
    }
}


function moveMoodScreen() {
    moodLeftBtn.addEventListener("click", moveMoodLeft);
    moodRightBtn.addEventListener("click", moveMoodRight);
    mood.style.left = "0%";
}

moveMoodScreen();